import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'


const EditPost = props => {
   const { id } = useParams();


   return (
      <div>
         EditPost with ID: { id }
      </div>
   )
}

EditPost.propTypes = {

}

export default EditPost
