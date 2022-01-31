import { useState, useRef, useEffect, useCallback } from 'react';
import s from './styles.module.css';

export const Dropdown = props => {
   const { chosen, options } = props;
   const [isVisible, setVisibility] = useState(false);
   const dropdown = useRef();

   const handleWindowClick = useCallback(e => {
      const node = dropdown.current;
      if (node.contains(e.target)) return;
      setVisibility(false);
   }, []);

   useEffect(() => {
      window.addEventListener(`click`, handleWindowClick);

      return () => {
         window.removeEventListener(`click`, handleWindowClick);
      }
   }, [handleWindowClick]);

   const handleClick = e => {
      setVisibility(true);
   }

   return (
      <div ref={dropdown} onClick={handleClick} className={s.dropdownBox}>
         <div className={s.chosenBox}>
            {chosen}
         </div>
         <div className={`${s.optionsBox} ${isVisible ? s.showOptions : ``}`}>
            {
               options.map((el, i) => {
                  return <div key={i}>{el}</div>
               })
            }
         </div>
      </div>
   )
}

export default Dropdown;