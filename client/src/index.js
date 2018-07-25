import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk'

import rootReducer from './reducers';
import FormsIndex from './components/forms_index';
import FormsEdit from './components/forms_edit';
import FormsShow from './components/forms_show';
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
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
        <Switch>
          <Route path="/forms/edit/:id" component={FormsEdit} />
          <Route path="/forms/:id" component={FormsShow} />
          <Route path="/" component={FormsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'),
);
