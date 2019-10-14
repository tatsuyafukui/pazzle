import firebase, { db, providerTwitter } from '../config/firebase';
import { user } from 'firebase-functions/lib/providers/auth';
import { showFlash, toggleUploadModal } from './ui';
import preview from '../public/images/preview.png';

const AUTH_START = 'START_AUTH';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAIL = 'AUTH_FAIL';

interface IinitialState {
  user: any;
  loading: boolean;
  error: null | string;
}

export const initialState: IinitialState = {
  user: null,
  loading: false,
  error: null,
};

// action
export const clickLogin = () => {
  return (dispatch: any) => {
    dispatch(authStart());
    firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then(result => {
        signUp(result);
        dispatch(authSuccess(result.user));
      });
  };
};

const signUp = (result: any) => {
  const userInfo = result.additionalUserInfo;

  const {isNewUser, username} = userInfo;
  const {
    email,
    profile_image_url_https,
    name,
    id_str,
  } = userInfo.profile;

  if(!isNewUser) return;

  const user = {
    username,
    email,
    profileImageUrl: profile_image_url_https.split('_normal').join(''),
    name
  };
  db.collection('users')
    .doc(id_str)
    .set(user)
    .then((addDoc: any) => {
      console.log('新規登録完了!');
    })
    .catch(e => {
      console.error('Error writing document: ', e);
    });


};

export const clickLogout = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signOut()
      .then(result => {
        dispatch(authSuccess(null));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authCheck = () => {
  return (dispatch: any) => {
    dispatch(authStart());
    firebase.auth().onAuthStateChanged(user => {
      dispatch(authSuccess(user));
    });
  };
};

const authStart = () => {
  return {
    type: AUTH_START,
  };
};

const authSuccess = (authData: any) => {
  return {
    type: AUTH_SUCCESS,
    authData: authData,
  };
};

const authFail = (error: any) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

// reducer
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.authData,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
