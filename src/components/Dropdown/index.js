import { Fragment, useRef, useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import s from './styles.module.css';
import { icons } from '../TextEditor/BlockButton';
import TAGS from '../TextEditor/elements';
import { TEXT_ALIGN } from '../TextEditor/BlockButton';

export const Dropdown = props => {
   const { options, label } = props;
   const dropdown = useRef();

   const [isVisible, setVisibility] = useState(false);

   const handleWindowClick = useCallback(e => {

      if (isVisible && !dropdown.current.contains(e.target)) {
         setVisibility(false);
      }

   }, [isVisible]);

   useEffect(() => {
      document.addEventListener(`click`, handleWindowClick);

      return () => {
         document.removeEventListener(`click`, handleWindowClick);
      }
   }, [handleWindowClick]);

   const handleDropClick = e => {
      if (!isVisible) setVisibility(true);
   }

   const handleListClick = e => {
      if (isVisible) setVisibility(false);
   }

   return (
      <div ref={dropdown} onClick={handleDropClick} className={s.dropdownBox}>
         <div className={s.chosenBox}>
            {label}
         </div>
         <div onClick={handleListClick} className={`${s.optionsBox} ${isVisible ? s.showOptions : ``}`}>
            {
               options.map((el, i) => {
                  return <Fragment key={i}>{el}</Fragment>
               })
            }
         </div>
      </div>
   )
}

export const useLabel = type => {
   const option = useSelector(state => state.dropdown[type]);

   switch (type) {
      case `heading`:
         return (<div style={{
            backgroundColor: `${option ? `#eee` : `#fff`}`,
            textAlign: `center`,
            padding: `1px 4px 2px 1px`,
            borderRadius: `3px`,
            maxWidth: `90px`
         }}>{option || TAGS.H1}</div>)

      case `align`:
         return (
            <button style={{
               margin: 0
            }}>
               <img src={icons[option] || icons[TEXT_ALIGN.left]} alt={option || `Initial`} />
            </button>
         )

      case `list`:
         return (
            <button style={{
               margin: 0
            }}>
               <img src={icons[option] || icons[TAGS.UL]} alt={option || `Initial`} />
            </button>
         )

      default: return null;
   }
}

export default Dropdown;