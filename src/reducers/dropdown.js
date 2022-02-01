import { 
   DROPDOWN_SET_HEADING,
   DROPDOWN_SET_ALIGN,
   DROPDOWN_SET_LIST
} from '../actions/dropdown';

const initState = {
   heading: null,
   align: null,
   list: null,
}

export const dropdown = (state = initState, action) => {
   switch (action.type) {
      case DROPDOWN_SET_HEADING:
         return { ...state, chosen: action.heading }

      case DROPDOWN_SET_ALIGN:
         return { ...state, chosen: action.align }

      case DROPDOWN_SET_LIST:
         return { ...state, chosen: action.list }

      default: return state;
   }
}