import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer
});

export default rootReducer;
