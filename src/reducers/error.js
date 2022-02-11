import { ERROR_CHANGE } from '../actions/error';


const initState = {
   msg: ``,
}

export const error = (state = initState, action) => {
   switch (action.type) {
      case ERROR_CHANGE:
         return { ...state, msg: action.msg }

      default: return state;
   }
}