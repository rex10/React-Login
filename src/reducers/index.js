import { combineReducers } from 'redux';
import notes from './notes';
import inputs from './inputs';
import { authentication } from './authReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';

export default combineReducers({
  notes,
  inputs,
  authentication,
  users,
  alert
})
