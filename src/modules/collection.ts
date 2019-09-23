import { db } from '../config/firebase';
import { EMode } from '../types';

const COLLECTION_START = 'COLLECTION_START';
const COLLECTION_SUCCESS = 'COLLECTION_SUCCESS';
const COLLECTION_FAIL = 'COLLECTION_FAIL';
const ACTIVE_IMAGE_SUCCESS = 'ACTIVE_IMAGE_SUCCESS';

interface IImages {
  path: string;
  name: string;
  user_id: string;
  id: string;
}

interface IinitialState {
  images: IImages[] | [];
  loading: boolean;
  error: null | string;
  activeImage: any;
}

const initialState: IinitialState = {
  images: [],
  loading: false,
  error: null,
  activeImage: null,
};

// action
export const collectionCheck = () => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    db.collection('images')
      .orderBy('created_at', 'asc')
      .onSnapshot(snapshot => {
        let arr: any = [];
        if (snapshot.empty) {
          dispatch(collectionSuccess([]));
          return;
        }
        snapshot.forEach(item => {
          const image = {
            id: item.id,
            ...item.data(),
          };
          arr.push(image);
        });
        dispatch(collectionSuccess(arr));
      });
  };
};

export const activeImage = (imageId: string) => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    db.collection('images')
      .doc(imageId)
      .onSnapshot(documentSnapshot => {
        dispatch(activeImageSuccess(documentSnapshot.data()));
      });
  };
};

// action
export const addCollection = (images: [IImages], image: IImages) => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    const newImages: any = [...images];
    newImages.push(image);
    dispatch(collectionSuccess(newImages));
  };
};

const collectionStart = () => {
  return {
    type: COLLECTION_START,
    loading: true,
  };
};

const collectionSuccess = (collectionData: any[]) => {
  return {
    type: COLLECTION_SUCCESS,
    collectionData: collectionData,
  };
};

const activeImageSuccess = (imageData: any) => {
  return {
    type: ACTIVE_IMAGE_SUCCESS,
    imageData: imageData,
    loading: false,
  };
};

const collectionFail = (error: any) => {
  return {
    type: COLLECTION_FAIL,
    error: error,
  };
};

// reducer
const collectionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COLLECTION_START:
      return {
        ...state,
        loading: true,
      };
    case COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.collectionData,
      };
    case COLLECTION_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case ACTIVE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        activeImage: action.imageData,
      };
    default:
      return state;
  }
};

export default collectionReducer;
