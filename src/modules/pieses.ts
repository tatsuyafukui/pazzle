const PIECE_START = 'PIECE_START';
const PIECE_SUCCESS = 'PIECE_SUCCESS';
const MODE_SUCCESS = 'MODE_SUCCESS';

const PIECE_FAIL = 'PIECE_FAIL';

interface IInitialState {
  mode: number;
  columns: any;
}

const initialState: IInitialState = {
  columns: [
    {
      id: 0,
      tasks: [1, 2, 3],
    },
    {
      id: 1,
      tasks: [4, 5, 6],
    },
    {
      id: 2,
      tasks: [7, 8, 9],
    },
  ],
  mode: 3,
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
    default:
      return state;
  }
};

export default pieceReducer;
