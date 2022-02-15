import {
   POST_LOADING,
   POST_ERROR,
   POST_SET,
   POST_SET_SECTION_TITLE,
   POST_SET_SHORT_TITLE
} from '../actions/post';

export const initState = {
   isLoading: true,
   error: null,
   post: {
      shortTitle: null,
      section: {
         title: null
      }
   }
}

export const post = (state = initState, action) => {
   switch (action.type) {
      case POST_LOADING:
         return { ...state, isLoading: action.isLoading }

      case POST_ERROR:
         return { ...state, error: action.msg }

      case POST_SET:
         return {
            ...state,
            post: {
               ...action.post
            }
         }

      case POST_SET_SECTION_TITLE:
         return {
            ...state,
            post: {
               ...state.post,
               section: {
                  ...state.post.section,
                  title: action.title
               }
            }
         }

      case POST_SET_SHORT_TITLE:
         return {
            ...state,
            post: {
               ...state.post,
               shortTitle: action.title
            }
         }

      default: return state;
   }
}

export default post;