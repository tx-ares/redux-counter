// This file acts as a funnel to combine all reducers into one object.

import { combineReducers } from 'redux';
import postReducer from './postReducer.js';

export default combineReducers({
    posts: postReducer
});
