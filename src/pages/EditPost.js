import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';



const EditPost = props => {
   // const { id } = useParams();

   const { isLoading, error, posts } = useSelector(state => state.posts);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts(`https://jsonplaceholder.typicode.com/posts`));
   }, [dispatch]);


   



   if (isLoading) {
      return <div>Posts are Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   return (
      <div>
         {
            posts.map((el, i) => {
               return <p key={i}>{JSON.stringify(el)}</p>
            })
         }
      </div>
   )
}


export default EditPost
