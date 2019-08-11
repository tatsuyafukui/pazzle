import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import authReducer from '../modules/auth';
import collectionReducer from '../modules/collection';
import pieceReducer from '../modules/pieses';
import { create } from 'react-test-renderer';
import Spinner from '../atoms/Spinner/Spinner';

const reducer = combineReducers({
  authReducer,
  collectionReducer,
  pieceReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

it('renders without crashing', () => {
  // let tree = create(<Spinner/>);
  // expect(tree.toJSON()).toMatchSnapshot();

  const div = document.createElement('div');
  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});
