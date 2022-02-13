import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../actions/post';
import { useParams } from 'react-router-dom';

const Post = props => {
   const { postId } = useParams();

   const { isLoading, error, post } = useSelector(state => state.post);
   const dispatch = useDispatch();

   useEffect(() => {
      if (postId) dispatch(getPost(postId));
      
   }, [dispatch, postId]);


   if (!postId) {
      return <div>Nothing to show yet...</div>
   }

   if (isLoading) {
      return <div>Post is Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   return (
      <div>
         {JSON.stringify(post)}
      </div>
   )
}

export default Post;