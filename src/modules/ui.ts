const CHANGE_MODAL = 'CHANGE_MODAL';

interface IinitialState {
  hasModal: boolean;
}

export const initialState: IinitialState = {
  hasModal: false,
};

// action
export const toggleModal = (modalState: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_MODAL,
      hasModal: !modalState
    })
  }
};

// reducer
const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        hasModal: action.hasModal,
      };
    default:
      return state;
  }
};

export default uiReducer;
