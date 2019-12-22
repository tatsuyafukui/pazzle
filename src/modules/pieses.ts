import { db } from '../config/firebase';
import { getDisplayTime } from '../molecules/DisplayTime';

const UPDATE_TIME = 'UPDATE_TIME';
const PIECE_SUCCESS = 'PIECE_SUCCESS';
const MODE_SUCCESS = 'MODE_SUCCESS';
const SET_BEST_TIME = 'SET_BEST_TIME';
const SET_SELF_BEST_TIME = 'SET_SELF_BEST_TIME';

const GAME_START = 'GAME_START';
const GAME_END = 'GAME_END';
const GAME_CANCEL = 'GAME_CANCEL';

interface IInitialState {
  mode: number;
  columns: any;
  time: number;
  playing: boolean;
  startTime: number;
  interval: any;
  bestTime: IBestTime;
  selfTime: any;
}

export interface IBestTime {
  time: string;
  mode: string;
}

const initialState: IInitialState = {
  columns: [
    {
      id: 0,
      tasks: [],
    },
    {
      id: 1,
      tasks: [],
    },
    {
      id: 2,
      tasks: [],
    },
  ],
  mode: 3,
  time: 0,
  startTime: 0,
  playing: false,
  interval: null,
  bestTime: {
    time: '--:--:--',
    mode: 'easyTime',
  },
  selfTime: null,
};

// action
export const changeColumns = (newColumns: any) => {
  return (dispatch: any) => {
    dispatch(columnsSuccess(newColumns));
  };
};

export const changeMode = (newMode: number, newColumns: any) => {
  return (dispatch: any) => {
    dispatch(modeSuccess(newMode, newColumns));
  };
};

export const columnsSuccess = (newColumns: any) => {
  return {
    type: PIECE_SUCCESS,
    newColumns: newColumns,
  };
};

const modeSuccess = (newMode: number, newColumns: any) => {
  return {
    type: MODE_SUCCESS,
    newMode: newMode,
    columns: newColumns,
};
};

export const gameStart = (newColumns: any, setInterval: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GAME_START,
      newColumns: newColumns,
      playing: true,
      interval: setInterval,
    });
  };
};

export const getUserSelfRecord = (uid: string, imageId: string) => {
  return (dispatch: any) => {
    db.collection('env').doc(process.env.NODE_ENV).collection('users')
      .doc(uid)
      .collection('images')
      .doc(imageId)
      .onSnapshot(documentSnapshot => {
        const selfTime = documentSnapshot.data() || {};
        dispatch({
          type: SET_SELF_BEST_TIME,
          selfTime,
        });
      });
  };
};

export const gameEnd = (user: any, time: number, bestTime: IBestTime, imageId: string, isNewRecord: boolean, isNewSelfRecord: boolean) => {
  return (dispatch: any) => {
    const endTime = getDisplayTime(time);
    const uid = user.providerData[0].uid;
    const newImage: any = {
      updated_at: new Date(),
      [bestTime.mode]: endTime,
    };

    if (isNewRecord) {
      updateWorldRecord(imageId, newImage);
    }

    if (isNewSelfRecord) {
      updateSelfRecord(uid, imageId, bestTime.mode, endTime);
    }

    dispatch({
      type: GAME_END,
      time: time,
      playing: false,
    });
  };
};

const updateWorldRecord = (imageId: string, newObj: any) => {
  db.collection('env').doc(process.env.NODE_ENV).collection('images')
    .doc(imageId)
    .update(newObj)
    .then((addDoc: any) => {
      console.log('new record!!');
    })
    .catch(e => {
      console.error('Error writing document: ', e);
    });
};

const updateSelfRecord = (uid: string, imageId: string, mode: string, endTime: string) => {
  db.collection('env').doc(process.env.NODE_ENV).collection('users')
    .doc(uid)
    .collection('images')
    .doc(imageId)
    .set({ [mode]: endTime }, { merge: true })
    .then((addDoc: any) => {
      console.log('new self record!!');
    })
    .catch(e => {
      console.error('Error writing document: ', e);
    });
};

export const gameCancel = () => {
  return (dispatch: any) => {
    dispatch({
      type: GAME_CANCEL,
      playing: false,
      time: 0,
      columns: [
        {
          id: 0,
          tasks: [],
        },
        {
          id: 1,
          tasks: [],
        },
        {
          id: 2,
          tasks: [],
        },
      ],
    });
  };
};

export const setBestTime = (bestTime: IBestTime) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_BEST_TIME,
      bestTime: bestTime,
    });
  };
};

export const updateTime = (time: number) => {
  return (dispatch: any) => {
    dispatch({
      type: UPDATE_TIME,
      time: time,
    });
  };
};

// reducer
const pieceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PIECE_SUCCESS:
      return {
        ...state,
        columns: action.newColumns,
      };
    case MODE_SUCCESS:
      return {
        ...state,
        mode: action.newMode,
        columns: action.columns,
      };
    case GAME_START:
      return {
        ...state,
        columns: action.newColumns,
        playing: action.playing,
        interval: action.interval,
      };
    case GAME_END:
      return {
        ...state,
        playing: action.playing,
        time: action.time,
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: action.time,
      };
    case SET_BEST_TIME:
      return {
        ...state,
        bestTime: action.bestTime,
      };
    case GAME_CANCEL:
      return {
        ...state,
        playing: action.playing,
        time: action.time,
        columns: action.columns,
      };
    case SET_SELF_BEST_TIME:
      return {
        ...state,
        selfTime: action.selfTime,
      };
    default:
      return state;
  }
};

export default pieceReducer;

export const checkNewRecord = (endTime: string, bestTime: string): boolean => {
  if (bestTime === '--:--:--') {
    return true;
  }

  const bestTimeArr = bestTime.split(':');
  const endTimeArr = endTime.split(':');
  const bestTimeSum = parseInt(bestTimeArr[0]) * 6000 + parseInt(bestTimeArr[1]) * 100 + parseInt(bestTimeArr[2]);
  const endTimeSum = parseInt(endTimeArr[0]) * 6000 + parseInt(endTimeArr[1]) * 100 + parseInt(endTimeArr[2]);

  return endTimeSum < bestTimeSum;
};
