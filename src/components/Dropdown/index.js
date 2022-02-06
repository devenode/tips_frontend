import { Fragment, useRef, useEffect, useCallback, useState } from 'react';
import { useBlocksType } from '../TextEditor/utils';
import s from './styles.module.css';
import { TAGS, TEXT_ALIGN, ICONS } from '../TextEditor/constants';

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

export const useLabel = dropdown => {
   const { type, align } = useBlocksType();
   let isActive;

   switch (dropdown) {
      case `heading`:
         isActive = [TAGS.H1, TAGS.H2, TAGS.H3, `Multiple`].includes(type);
         return (<div style={{
            backgroundColor: `${isActive ? `#eee` : `#fff`}`,
            textAlign: `center`,
            padding: `1px 4px 2px 1px`,
            borderRadius: `3px`,
            maxWidth: `90px`
         }}>{type && isActive ? type : TAGS.H1}</div>)

      case `align`:
         isActive = [TEXT_ALIGN.center, TEXT_ALIGN.right].includes(align) ;
         return (
            <button style={{
               margin: 0,
               backgroundColor: `${isActive ? `#eee` : `#fff`}`,
            }}>
               <img src={ICONS[align] && isActive ? ICONS[align] : ICONS[TEXT_ALIGN.left]} alt={align} />
            </button>
         )

      case `list`:
         isActive = [TAGS.UL, TAGS.OL].includes(type);
         return (
            <button style={{
               margin: 0,
               backgroundColor: `${isActive ? `#eee` : `#fff`}`,
            }}>
               <img src={ICONS[type] && isActive ? ICONS[type] : ICONS[TAGS.UL]} alt={type} />
            </button>
         )

      default: return <div>None</div>;
   }
}

export default Dropdown;