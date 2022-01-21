export const POST_LOADING = `POST/LOADING`;
export const POST_ERROR = `POST/ERROR`;
export const POST_SET = `POST/SET`;

export const getPost = postId => {
   return async (dispatch, getState) => {
      try {
         const post = {
            id: `someId`,
            title: `It's a new post here`
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