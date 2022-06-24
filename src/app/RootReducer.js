import { combineReducers } from '@reduxjs/toolkit';
import ActionReducer from './ActionReducer';

const rootReducer = combineReducers({
  todos: ActionReducer,
});

export default rootReducer;