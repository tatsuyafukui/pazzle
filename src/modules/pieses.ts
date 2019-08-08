
const PIECE_START = 'PIECE_START';
const PIECE_SUCCESS = 'PIECE_SUCCESS';
const PIECE_FAIL = 'PIECE_FAIL';


interface IInitialState {
  piece: any,
  mode: number,
  pieceId: any
}

const initialState: IInitialState = {
  piece: [],
  mode: 3,
  pieceId: []
};

// action
export const changePiece = (newPiece: any) => {
  return (dispatch: any) => {
    dispatch(pieseSuccess(newPiece));
  };
};

const pieseSuccess = (pieceData: any) => {
  return {
    type: PIECE_SUCCESS,
    pieceData: pieceData,
  };
};

// reducer
const pieceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PIECE_SUCCESS:
      return {
        ...state,
        pieceId: action.pieceData,
      };
    default:
      return state;
  }
};

export default pieceReducer;
