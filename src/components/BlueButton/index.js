import PropTypes from 'prop-types';
import { useEffect } from 'react';
import s from './styles.module.css';


export const BlueButton = props => {
   const { handleClick, isLoading } = props;
   useEffect(() => {
      document.getElementById(`root`).focus();;
   }, []);

   return (
      <button className={s.blueBtn} onClick={props.handleClick}>
         {
            isLoading ?
               <Loader /> :
               <p>{props.title}</p>
         }
      </button>
   )
}


BlueButton.protoTypes = {
   handleClick: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired
}


export default BlueButton;
