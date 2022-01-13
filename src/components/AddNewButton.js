import { Link } from 'react-router-dom';

export const AddNewButton = props => {
   return (
      <p className="txt-btn">
         <Link to="/create-post">Add new tip</Link>
      </p>
   )
}


export default AddNewButton;
