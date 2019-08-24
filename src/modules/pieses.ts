const UPDATE_TIME = 'UPDATE_TIME';
const PIECE_SUCCESS = 'PIECE_SUCCESS';
const MODE_SUCCESS = 'MODE_SUCCESS';

const GAME_START = 'GAME_START';
const GAME_END = 'GAME_END';

interface IInitialState {
  mode: number;
  columns: any;
  time: number;
  playing: boolean;
  startTime: number;
  interval: any;
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
};

// action
export const changeColumns = (newColumns: any) => {
  return (dispatch: any) => {
    dispatch(columnsSuccess(newColumns));
  };
};

export const changeMode = (newMode: number) => {
  return (dispatch: any) => {
    dispatch(modeSuccess(newMode));
  };
};

const columnsSuccess = (newColumns: any) => {
  return {
    type: PIECE_SUCCESS,
    newColumns: newColumns,
  };
};

const modeSuccess = (newMode: number) => {
  return {
    type: MODE_SUCCESS,
    newMode: newMode,
  };
};

export const gameStart = (newColumns: any, time: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GAME_START,
      newColumns: newColumns,
      playing: true,
      interval: time,
    });
  };
};

export const gameEnd = () => {
  return (dispatch: any) => {
    dispatch({
      type: GAME_END,
      playing: false,
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
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: action.time,
      };
    default:
      return state;
  }
};

export default pieceReducer;
