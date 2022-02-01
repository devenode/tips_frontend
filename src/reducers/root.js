import { combineReducers } from 'redux';
import { mainSearch } from './mainSearch';
import { post } from './post';
import { sideMenu } from './sideMenu';
import { dropdown } from './dropdown';



export const rootReducer = combineReducers({
   mainSearch,
   post,
   sideMenu,
   dropdown
});