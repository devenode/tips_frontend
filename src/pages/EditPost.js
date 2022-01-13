import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';





const Test = props => {
   useEffect(() => {
      console.log(`Test component useEffect ran`)
   }, []);

   console.log(`Test rendered`);

   return (
      <div>Test Component</div>
   )
}

const EditPost = props => {
   const { id } = useParams();

   const [postId, setPostId] = useState(1);
   useEffect(() => {
      console.log(`EditPost component useEffect ran`)
   }, []);

   const handleClick = e => {
      setPostId(postId + 1);
   }

   console.log(`EditPost rendered`);

   return (
      <div>
         <Test />
         <p>EditPost with ID: {postId}</p>
         <button onClick={handleClick}>Click me</button>
      </div>
   )
}

EditPost.propTypes = {

}

export default EditPost
