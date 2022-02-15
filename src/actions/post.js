import req from '../utils/axios';

export const POST_LOADING = `POST/LOADING`;
export const POST_ERROR = `POST/ERROR`;
export const POST_SET = `POST/SET`;
export const POST_SET_SECTION_TITLE = `POST/SET_SECTION_TITLE`;
export const POST_SET_SHORT_TITLE = `POST/SET_SHORT_TITLE`;

export const getPost = postId => {
   return async (dispatch, getState) => {
      try {
         const { data: post } = await req.get(`/post/${postId}`);
         dispatch(setPost(post));
         dispatch(setPostError(null));
      } catch (error) {
         if (error.response && error.response.data) dispatch(setPostError(error.response.data));
         else dispatch(setPostError(error.message));
      }
      dispatch(isPostLoading(false));
   }
}

export const createPost = async post => {
   const newPost = await req.post(`/post`, post);
   return newPost.data;
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