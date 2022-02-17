import req from '../utils/axios';

export const SECTIONS_LOADING = `SECTONS/LOADING`;
export const SECTIONS_ERROR = `SECTIONS/ERROR`;
export const SECTIONS_SET = `SECTIONS/SET`;
export const SECTIONS_SET_ACTIVE_SECTION = `SECTIONS/SET_ACTIVE_SECTION`;

export const getSections = () => {
   return async (dispatch, getState) => {
      try {
         dispatch(isSectionsLoading(true));
         const { data: sections } = await req.get(`/sections`);
         dispatch(setSections(sections));
         dispatch(setSectionsError(null));
      } catch (error) {
         if (error.response && error.response.data) dispatch(setSectionsError(error.response.data));
         else dispatch(setSectionsError(error.message));
      }
      dispatch(isSectionsLoading(false));
   }
}

export const setSections = sections => {
   return {
      type: SECTIONS_SET,
      sections
   }
}

export const isSectionsLoading = isLoading => {
   return {
      type: SECTIONS_LOADING,
      isLoading
   }
}

export const setSectionsError = msg => {
   return {
      type: SECTIONS_ERROR,
      msg
   }
}

export const setActiveSection = sectionId => {
   return {
      type: SECTIONS_SET_ACTIVE_SECTION,
      sectionId
   }
}