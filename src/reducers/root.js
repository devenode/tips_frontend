import { combineReducers } from 'redux';
import { mainSearch } from './mainSearch';
import { posts } from './posts';
import { sideMenu } from './sideMenu';



export const rootReducer = combineReducers({
   mainSearch,
   posts,
   sideMenu
});