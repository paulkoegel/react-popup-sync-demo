import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import documentsReducer from './documentsReducer';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  documents: documentsReducer,
  notes: notesReducer
});

export default rootReducer;
