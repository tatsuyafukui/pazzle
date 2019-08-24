import { db } from '../config/firebase';

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
export const collectionCheck = (uid: string) => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    db.collection('users')
      .doc(uid)
      .collection('images')
      .get()
      .then(snapshot => {
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
      })
      .catch(e => {
        dispatch(collectionFail(e));
      });
  };
};

export const tmp = (uid: string) => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    db.collection('users')
      .doc(uid)
      .collection('images')
      .get()
      .then(snapshot => {
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
      })
      .catch(e => {
        dispatch(collectionFail(e));
      });
  };
};

export const activeImage = (uid: string, imageId: string) => {
  return (dispatch: any) => {
    dispatch(collectionStart());
    db.collection('users')
      .doc(uid)
      .collection('images')
      .doc(imageId)
      .get()
      .then(documentSnapshot => {
        dispatch(activeImageSuccess(documentSnapshot.data()));
      })
      .catch(e => {
        dispatch(collectionFail(e));
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
  };
};

const collectionSuccess = (collectionData: [IImages] | []) => {
  return {
    type: COLLECTION_SUCCESS,
    collectionData: collectionData,
  };
};

const activeImageSuccess = (imageData: any) => {
  return {
    type: ACTIVE_IMAGE_SUCCESS,
    imageData: imageData,
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
