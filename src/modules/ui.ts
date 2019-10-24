import { IBestTime } from './pieses';

const CHANGE_MODAL = 'CHANGE_MODAL';
const CHANGE_UPLOAD_MODAL = 'CHANGE_UPLOAD_MODAL';
const SHOW_FLASH = 'SHOW_FLASH';
const HIDDEN_FLASH = 'HIDDEN_FLASH';
const CHANGE_CONFIRM = 'CHANGE_CONFIRM';
const CHANGE_CLEAR_MODAL = 'CHANGE_CLEAR_MODAL';
const OPEN_CLEAR_MODAL = 'OPEN_CLEAR_MODAL';

interface IinitialState {
  hasModal: boolean;
  hasUploadModal: boolean;
  hasFlash: boolean;
  flashMessage: string;
  showConfirm: boolean;
  showClearModal: boolean;
  newRecordInfo: INewRecordInfo | null;
}

export type INewRecordInfo = {
  isNewRecord: boolean,
  isNewSelfRecord: boolean,
  endTime: string,
  bestTime: IBestTime,
  selfBestTime: string,
}

export const initialState: IinitialState = {
  hasModal: false,
  hasUploadModal: false,
  hasFlash: false,
  flashMessage: '',
  showConfirm: false,
  showClearModal:false,
  newRecordInfo: {
    isNewRecord: true,
    isNewSelfRecord: true,
    endTime: '00:00:00',
    bestTime: {
      mode: 'easyTime',
      time: '00:00:00'
    },
    selfBestTime: '00:00:00',
  },
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

export const openConfirm = () => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_CONFIRM,
      showConfirm: true,
    });
  };
};

export const closeConfirm = () => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_CONFIRM,
      showConfirm: false,
    });
  };
};

export const openClearModal = (newRecordInfo: INewRecordInfo) => {

  return (dispatch: any) => {
    dispatch({
      type: OPEN_CLEAR_MODAL,
      showClearModal: true,
      newRecordInfo: newRecordInfo,
    });
  };
};

export const closeClearModal = () => {
  return (dispatch: any) => {
    dispatch({
      type: CHANGE_CLEAR_MODAL,
      showClearModal: false,
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
    case CHANGE_CONFIRM:
      return {
        ...state,
        showConfirm: action.showConfirm,
      };
    case CHANGE_CLEAR_MODAL:
      return {
        ...state,
        showClearModal: action.showClearModal,
      };
    case OPEN_CLEAR_MODAL:
      return {
        ...state,
        showClearModal: action.showClearModal,
        newRecordInfo: action.newRecordInfo,
      };
    default:
      return state;
  }
};

export default uiReducer;
