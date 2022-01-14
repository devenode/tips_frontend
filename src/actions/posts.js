export const POSTS_LOADING = `POSTS/LOADING`;
export const POSTS_ERROR = `POSTS/ERROR`;
export const POSTS_SET = `POSTS/SET`;

export const getPosts = url => {
   return async (dispatch, getState) => {
      try {
         const response = await fetch(url);
         const posts = await response.json();

         dispatch(setPosts(posts));
         dispatch(loadPosts(false));
         
      } catch (error) {
         dispatch(loadPosts(false));
         dispatch(setPostsError(error.message));
      }
   }
}

export const loadPosts = isLoading => {
   return {
      type: POSTS_LOADING,
      isLoading
   }
}

export const setPostsError = msg => {
   return {
      type: POSTS_ERROR,
      msg
   }
}

export const setPosts = posts => {
   return {
      type: POSTS_SET,
      posts
   }
}