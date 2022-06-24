import { combineReducers } from '@reduxjs/toolkit';
import todosSlice  from './Actions';
import videoSlice from './ApiActions';

const rootReducer = combineReducers({
  todos: todosSlice ,
  apis:videoSlice
});

export default rootReducer;