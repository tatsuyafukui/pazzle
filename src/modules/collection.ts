import { db } from '../config/firebase';
import { createCanvasList, createStartColumns } from '../lib/canvas';
import { columnsSuccess } from './pieses';

const COLLECTION_START = 'COLLECTION_START';
const COLLECTION_SUCCESS = 'COLLECTION_SUCCESS';
const COLLECTION_FAIL = 'COLLECTION_FAIL';
const ACTIVE_IMAGE_SUCCESS = 'ACTIVE_IMAGE_SUCCESS';
const GET_CATEGORYS = 'GET_CATEGORYS';

interface IImages {
  path: string;
  name: string;
  user_id: string;
  id: string;
  // categorys: string;
}

interface IinitialState {
  images: IImages[] | [];
  loading: boolean;
  error: null | string;
  activeImage: any;
  // categorys: any;
}

const initialState: IinitialState = {
  images: [],
  loading: false,
  error: null,
  activeImage: null,
  // categorys: ['all'],
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


    // db.collection('images')
    //   .orderBy('created_at', 'asc')
    //   .where("category", "array-contains", "Magenta")
    //   .onSnapshot(snapshot => {
    //     let arr: any = [];
    //     if (snapshot.empty) {
    //       dispatch(collectionSuccess([]));
    //       return;
    //     }
    //     snapshot.forEach(item => {
    //       const image = {
    //         id: item.id,
    //         ...item.data(),
    //       };
    //       arr.push(image);
    //     });
    //     dispatch(collectionSuccess(arr));
    //   });

  };
};

export const activeImage = (imageId: string) => {

  return (dispatch: any, store: any) => {
    dispatch(collectionStart());
    db.collection('images')
      .doc(imageId)
      .onSnapshot((documentSnapshot: any) => {
        dispatch(activeImageSuccess(documentSnapshot.data()));

        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.addEventListener('load', () => {
          const isPhone = (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;

          var scale = isPhone ?0.5:1.0; // 縦横を50%縮小
          var canvas = document.createElement('canvas');
          var ctx: any = canvas.getContext('2d');
          var dstWidth = img.width*scale;
          var dstHeight = img.height*scale;
          canvas.width = dstWidth;
          canvas.height = dstHeight;
          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, dstWidth, dstHeight);

          const canvasList = createCanvasList(canvas, store().pieceReducer.mode);
          const newColumns = createStartColumns(store().pieceReducer.mode, canvasList);
          dispatch(columnsSuccess(newColumns));
        });
        img.src = documentSnapshot.data().path;
      });
  };
};

export const getCategorys = () => {

  return (dispatch: any) => {
    db.collection('categorys')
      .onSnapshot((documentSnapshot: any) => {
        console.log(documentSnapshot.docs[0].id)
        dispatch({
          type: GET_CATEGORYS,
          categorys: documentSnapshot.docs
        });
      });
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
    case GET_CATEGORYS:
      return {
        ...state,
        categorys: action.categorys,
      };
    default:
      return state;
  }
};

export default collectionReducer;
