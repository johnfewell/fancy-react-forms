import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './semantic/dist/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import FormsIndex from './components/forms_index'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={FormsIndex} />
    </div>
  </BrowserRouter>
,  document.getElementById('root'), // eslint-disable-line no-undef
);
