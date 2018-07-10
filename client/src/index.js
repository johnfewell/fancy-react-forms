import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk'

import rootReducer from './reducers';
import FormsIndex from './components/forms_index'
import './index.css';
import './semantic/dist/semantic.min.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={ FormsIndex } />
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'),
);
