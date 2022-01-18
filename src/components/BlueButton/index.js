import { useEffect } from 'react';
import s from './styles.module.css';


export const BlueButton = props => {
   useEffect(() => {
      document.getElementById(`root`).focus(); ;
   });

   return (
      <button className={s.blueBtn} onClick={props.handleClick}>{props.title}</button>
   )
}


export default BlueButton;
