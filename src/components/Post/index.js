import { useSelector } from 'react-redux';

const Post = props => {
   const { isLoading, error, post } = useSelector(state => state.post);

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