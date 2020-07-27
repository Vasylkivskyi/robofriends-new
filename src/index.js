import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from './reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import './index.scss';
import thunkMiddleware from 'redux-thunk';
import App from './Containers/App/App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
});
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
