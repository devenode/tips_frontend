export const POST_LOADING = `POST/LOADING`;
export const POST_ERROR = `POST/ERROR`;
export const POST_SET = `POST/SET`;
export const POST_SET_SECTION_TITLE = `POST/SET_SECTION_TITLE`;
export const POST_SET_SHORT_TITLE = `POST/SET_SHORT_TITLE`;

export const getPost = postId => {
   return async (dispatch, getState) => {
      try {
         const post = {
            id: `postId`,
            shortTitle: `It's a Short post's title here`,
            section: {
               id: `sectionID`,
               title: `Post Section Title`
            }
         }

         await new Promise(res => setTimeout(() => res(), 700));

         dispatch(setPost(post));
         dispatch(isPostLoading(false));
         
      } catch (error) {
         dispatch(setPostError(error.message));
         dispatch(isPostLoading(false));
      }
   }
}

export const isPostLoading = isLoading => {
   return {
      type: POST_LOADING,
      isLoading
   }
}

export const setPostError = msg => {
   return {
      type: POST_ERROR,
      msg
   }
}

export const setPost = post => {
   return {
      type: POST_SET,
      post
   }
}

export const setPostSection = title => {
   return {
      type: POST_SET_SECTION_TITLE,
      title
   }
}

export const setPostShortTitle = title => {
   return {
      type: POST_SET_SHORT_TITLE,
      title
   }
}