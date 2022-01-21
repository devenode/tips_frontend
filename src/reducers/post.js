import { 
   POST_LOADING,
   POST_ERROR,
   POST_SET
} from '../actions/post';

const initState = {
   isLoading: true,
   error: null,
   post: {}
}

export const post = (state = initState, action) => {
   switch (action.type) {
      case POST_LOADING:
         return { ...state, isLoading: action.isLoading }

      case POST_ERROR:
         return { ...state, error: action.msg }

      case POST_SET:
         return { ...state, posts: action.post }

      default: return state;
   }
}

export default post;