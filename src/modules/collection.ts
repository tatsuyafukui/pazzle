import { db } from '../config/firebase';

const COLLECTION_START = 'COLLECTION_START';
const COLLECTION_SUCCESS = 'COLLECTION_SUCCESS';
const COLLECTION_FAIL = 'COLLECTION_FAIL';

interface IImages {
  path: string,
  name: string,
  user_id: string,
}

interface IinitialState {
  images: [IImages] | null;
  imagesLoading: boolean;
  imagesError: null | string;
}

export const initialState: IinitialState = {
  images: null,
  imagesLoading: false,
  imagesError: null,
};

// action
export const collectionCheck = (uid: string) => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    db.collection('users')
      .doc(uid)
      .collection('images')
      .get()
      .then(snapshot => {
        if (snapshot.empty) return;
        let arr: any = [];
        snapshot.forEach(item => {
          arr.push(item.data());
        });
        dispatch(collectionSuccess(arr));
      });
  };
};

const collectionStart = () => {
  return {
    type: COLLECTION_START,
  };
};

const collectionSuccess = (collectionData: [IImages]) => {
  return {
    type: COLLECTION_SUCCESS,
    collectionData: collectionData,
  };
};

const collectionFail = (error: any) => {
  return {
    type: COLLECTION_FAIL,
    imagesError: error,
  };
};

// reducer
const collectionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COLLECTION_START:
      return {
        ...state,
        imagesLoading: true,
      };
    case COLLECTION_SUCCESS:
      return {
        ...state,
        imagesLoading: false,
        images: action.collectionData,
      };
    case COLLECTION_FAIL:
      return {
        ...state,
        imagesError: action.imagesError,
        imagesLoading: false,
      };
    default:
      return state;
  }
};

export default collectionReducer;
