import { MAINSEARCH_CHANGE_INPUT } from '../actions/mainSearch';


const initState = {
   value: ``,
}

export const mainSearch = (state = initState, action) => {
   switch (action.type) {
      case MAINSEARCH_CHANGE_INPUT:
         return { ...state, value: action.text }

      default: return state;
   }
}