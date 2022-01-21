import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../actions/post';



const Post = props => {
   const { postId } = useParams();

   const { isLoading, error, post } = useSelector(state => state.post);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPost(postId));
   }, [dispatch, postId]);


   

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


export default Post
