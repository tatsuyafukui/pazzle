import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './modules/auth';
import collectionReducer from './modules/collection';
import thunk from 'redux-thunk';
import pieceReducer from './modules/pieses';
import uiReducer from './modules/ui';

const reducer = combineReducers({
  authReducer,
  collectionReducer,
  pieceReducer,
  uiReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
