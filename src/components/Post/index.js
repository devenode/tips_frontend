import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../actions/post';

const Post = props => {
   const { postId } = useParams();
   
   const { sections } = useSelector(state => state.sections);
   const post = useSelector(state => state.post);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!postId) return;
      
      dispatch(getPost(postId));
   }, [dispatch, postId]);


   if (post.isLoading && !sections.length) {
      return <div>Nothing to show yet...</div>
   }

   if (post.isLoading) {
      return <div>Post is Loading...</div>
   }

   if (post.error) {
      return <div>Error: {post.error}</div>
   }

   return (
      <div>
         {JSON.stringify(post)}
      </div>
   )
}

export default Post;