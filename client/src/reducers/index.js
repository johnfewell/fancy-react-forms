import { combineReducers } from 'redux';
import FormsReducer from './reducer_forms';

const rootReducer = combineReducers({
  forms: FormsReducer
});

export default rootReducer;
