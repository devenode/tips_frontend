import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = props => {
   return (
      <div>
         <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/post/1" >See Post</Link></li>
            <li><Link to="/create-post" >Create Post</Link></li>
            <li><Link to="/edit-post/1" >Edit Post</Link></li>
         </ul>
      </div>
   )
}

Navigation.propTypes = {

}

export default Navigation
