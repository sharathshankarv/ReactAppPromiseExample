import { combineReducers } from 'redux'
import usersReducer from './user.reducers';
import tweetsReducer from './tweets.reducers';

export default combineReducers({
  usersReducer,
  tweetsReducer
})