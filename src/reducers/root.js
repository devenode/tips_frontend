import { combineReducers } from 'redux';
import { mainSearch } from './mainSearch';
import { posts } from './posts';



export const rootReducer = combineReducers({
   mainSearch,
   posts
});