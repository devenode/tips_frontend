import { combineReducers } from 'redux';
import { mainSearch } from './mainSearch';
import { post } from './post';
import { sections } from './sections';


export const rootReducer = combineReducers({
   mainSearch,
   post,
   sections,
   
});