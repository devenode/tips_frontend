import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Loader from '../Loader';
import s from './styles.module.css';


export const BlueButton = props => {
   const { handleClick, title, isLoading } = props;
   useEffect(() => {
      document.getElementById(`root`).focus();;
   }, []);

   return (
      <button className={s.blueBtn} onClick={handleClick}>
         {
            isLoading ?
               <Loader /> :
               <p>{title}</p>
         }
      </button>
   )
}


BlueButton.protoTypes = {
   isLoading: PropTypes.bool,
   handleClick: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired
}


export default BlueButton;
