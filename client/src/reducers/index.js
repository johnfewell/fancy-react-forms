import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FormsReducer from './reducer_forms';
import DimmerReducer from './reducer_dimmer';


const rootReducer = combineReducers({
  forms: FormsReducer,
  dimmer: DimmerReducer,
  form: formReducer
});

export default rootReducer;
