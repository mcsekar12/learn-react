import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { applyMiddleware, createStore, compose } from 'redux';

import reducers from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const enhancers = [];

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        reducers,
        {},
        composeEnhancers(applyMiddleware(...middleware), ...enhancers)
      )}
    >
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
