import { 
   POSTS_LOADING,
   POSTS_ERROR,
   POSTS_SET
} from '../actions/posts';

const initState = {
   isLoading: true,
   error: null,
   posts: []
}

export const posts = (state = initState, action) => {
   switch (action.type) {
      case POSTS_LOADING:
         return { ...state, isLoading: action.isLoading }

      case POSTS_ERROR:
         return { ...state, error: action.msg }

      case POSTS_SET:
         return { ...state, posts: action.posts }

      default: return state;
   }
}

export default posts;