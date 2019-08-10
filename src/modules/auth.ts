import firebase, { providerTwitter } from '../config/firebase';

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
        dispatch(authSuccess(result.user));
        // dispatch(authSuccess(result.additionalUserInfo));
      });
  };
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
      console.log(user);

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
