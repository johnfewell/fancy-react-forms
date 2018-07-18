import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk'

import rootReducer from './reducers';
import FormsIndex from './containers/forms_index';
import FormsEdit from './containers/forms_edit';
import FormsShow from './containers/forms_show';
import FormsNew from './containers/forms_new';
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
        <Switch>
          <Route path="/forms/edit/:id" component={FormsEdit} />
          <Route path="/forms/new" component={FormsNew} />
          <Route path="/forms/:id" component={FormsShow} />
          <Route path="/" component={FormsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'),
);
