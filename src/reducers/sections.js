import {
   SECTIONS_LOADING,
   SECTIONS_ERROR,
   SECTIONS_SET,
   SECTIONS_SET_ACTIVE_SECTION
} from '../actions/sections';

const initState = {
   isLoading: true,
   error: null,
   sections: null,
   activeSectionId: null
}

export const sections = (state = initState, action) => {
   switch (action.type) {
      case SECTIONS_LOADING:
         return { ...state, isLoading: action.isLoading }

      case SECTIONS_ERROR:
         return { ...state, error: action.msg }

      case SECTIONS_SET:
         return { ...state, sections: action.sections }

      case SECTIONS_SET_ACTIVE_SECTION:
         return { ...state, activeSectionId: action.sectionId }

      default: return state;
   }
}