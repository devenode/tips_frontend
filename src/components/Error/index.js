import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './styles.module.css';
import { setError } from '../../actions/error';

export const Error = props => {
   const { msg } = useSelector(state => state.error);
   const dispatch = useDispatch();

   const style = { opacity: msg.length ? 1 : 0 };

   const handleWindowClick = useCallback((e) => {
         if (msg.length) dispatch(setError([]))
      }, [msg, dispatch]
   );

   useEffect(() => {
      document.addEventListener(`click`, handleWindowClick);
      return () => {
         document.removeEventListener(`click`, handleWindowClick);
      }
   }, [handleWindowClick]);



   return (
      <div className={s.errorBox} style={style}>
         <div>
            {msg.map((el, i) => <p key={i}>{el}</p>)}
         </div>
      </div>
   )
}

export default Error;