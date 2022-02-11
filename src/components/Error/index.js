import { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './styles.module.css';
import { setError } from '../../actions/error';

export const Error = props => {
    console.log(`Component run`)
    const box = useRef();

    const { msg } = useSelector(state => state.error);
    const dispatch = useDispatch();

    const style = { opacity: msg ? 1 : 0 };

    const handleWindowClick = useCallback(
        (e) => { if (msg) dispatch(setError(``))},
        [msg, dispatch]
    );

    useEffect(() => {
        document.addEventListener(`click`, handleWindowClick);
        return () => {
            document.removeEventListener(`click`, handleWindowClick);
        }
    }, [handleWindowClick]);



    return (
        <div ref={box} className={s.errorBox} style={style}>
            <p>{msg}</p>
        </div>
    )
}

export default Error;