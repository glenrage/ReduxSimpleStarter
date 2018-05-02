import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  authenticated: authenticationReducer
});

export default rootReducer;
