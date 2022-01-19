import {
   SIDEMENU_SET_MENU,
   SIDEMENU_SET_SECTION,
   SIDEMENU_LOADING,
   SIDEMENU_ERROR,
   SIDEMENU_SET_POST
} from '../actions/sideMenu';

const initState = {
   isLoading: true,
   error: null,
   sections: [],
   activeSectionId: null,
   firstPostId: null
}

export const sideMenu = (state = initState, action) => {
   switch (action.type) {
      case SIDEMENU_SET_MENU:
         return { ...state, sections: action.sections }

      case SIDEMENU_SET_SECTION:
         return { ...state, activeSectionId: action.sectionId }

      case SIDEMENU_SET_POST:
         return { ...state, firstPostId: action.postId }

      case SIDEMENU_LOADING:
         return { ...state, isLoading: action.isLoading }

      case SIDEMENU_ERROR:
         return { ...state, error: action.msg }

      default: return state;
   }
}