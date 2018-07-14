import { combineReducers } from 'redux';
import FormsReducer from './reducer_forms';
import DimmerReducer from './reducer_dimmer';


const rootReducer = combineReducers({
  forms: FormsReducer,
  dimmer: DimmerReducer
});

export default rootReducer;
