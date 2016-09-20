import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'; //to render to the DOM
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const store = createStore(todoApp); //Creates a Redux store that holds the complete state tree of your app.

render(
  <Provider store={store}> /* //passes down the store to the props */
    <App />
  </Provider>,
  document.getElementById('root')
);
