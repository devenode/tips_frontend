import { combineReducers } from 'redux';
import { mainSearch } from './mainSearch';
import { post } from './post';
import { sideMenu } from './sideMenu';



export const rootReducer = combineReducers({
   mainSearch,
   post,
   sideMenu
});