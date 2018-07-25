import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FormsReducer from './reducer_forms';
import UiReducer from './reducer_ui';

const rootReducer = combineReducers({
  forms: FormsReducer,
  ui: UiReducer,
  form: formReducer
});

export default rootReducer;
