const CHANGE_MODAL = 'CHANGE_MODAL';
const CHANGE_UPLOAD_MODAL = 'CHANGE_UPLOAD_MODAL';
const SHOW_FLASH = 'SHOW_FLASH';
const HIDDEN_FLASH = 'HIDDEN_FLASH';
const CHANGE_FLASH = 'CHANGE_FLASH';

interface IinitialState {
  hasModal: boolean;
  hasUploadModal: boolean;
  hasFlash: boolean;
  flashMessage: string;
}

export const initialState: IinitialState = {
  hasModal: false,
  hasUploadModal: false,
  hasFlash: false,
  flashMessage: '',
};

// action
export const toggleModal = (modalState: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_MODAL,
      hasModal: !modalState,
    });
  };
};

export const toggleUploadModal = (hasUploadModal: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_UPLOAD_MODAL,
      hasUploadModal: !hasUploadModal,
    });
  };
};

export const showFlash = (message: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SHOW_FLASH,
      hasFlash: true,
      flashMessage: message,
    });
  };
};

export const hiddenFlash = () => {
  return (dispatch: any) => {
    dispatch({
      type: HIDDEN_FLASH,
      hasFlash: false,
      flashMessage: '',
    });
  };
};

// reducer
const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        hasModal: action.hasModal,
      };
    case CHANGE_UPLOAD_MODAL:
      return {
        ...state,
        hasUploadModal: action.hasUploadModal,
      };
    case SHOW_FLASH:
      return {
        ...state,
        hasFlash: action.hasFlash,
        flashMessage: action.flashMessage,
      };
    case HIDDEN_FLASH:
      return {
        ...state,
        hasFlash: action.hasFlash,
        flashMessage: action.flashMessage,
      };
    default:
      return state;
  }
};

export default uiReducer;
