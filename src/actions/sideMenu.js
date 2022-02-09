import req from '../utils/axios';
import { getPost } from './post';

export const SIDEMENU_SET_POST = `SIDEMENU/SET_POST`;
export const SIDEMENU_SET_SECTION = `SIDEMENU/SET_SECTION`;
export const SIDEMENU_SET_MENU = `SIDEMENU/SET_MENU`;
export const SIDEMENU_LOADING = `SIDEMENU/LOADING`;
export const SIDEMENU_ERROR = `SIDEMENU/ERROR`;

export const getSideMenu = () => {
   return async (dispatch, getState) => {
      try {
         const sections = await req.get(`/sections`);

         if (sections.length) {
            dispatch(setSideMenu(sections));
            dispatch(setActiveSection(sections[0].id));
            dispatch(setFirstPostId(sections[0].posts[0].id));
            dispatch(getPost(sections[0].posts[0].id));
         }
         
         dispatch(isSideMenuLoading(false));
      } catch (error) {
         dispatch(setSideMenuError(error.message));
         dispatch(isSideMenuLoading(false));
      }
   }
}

export const isSideMenuLoading = isLoading => {
   return {
      type: SIDEMENU_LOADING,
      isLoading
   }
}

export const setSideMenuError = msg => {
   return {
      type: SIDEMENU_ERROR,
      msg
   }
}

export const setSideMenu = sections => {
   return {
      type: SIDEMENU_SET_MENU,
      sections
   }
}

export const setActiveSection = sectionId => {
   return {
      type: SIDEMENU_SET_SECTION,
      sectionId
   }
}

export const setFirstPostId = postId => {
   return {
      type: SIDEMENU_SET_POST,
      postId
   }
}