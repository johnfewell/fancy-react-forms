import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './semantic/dist/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import FormsIndex from './components/forms_index'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={FormsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'),
);
