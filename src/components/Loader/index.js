import s from './styles.module.css';

export const Loader = props => {
   const { classes } = props;

   return (
      <span className={`${s.loader} ${classes ? classes.join(` `) : ``}`}>
         <span className={s.lf}></span>
         <span className={s.ls}></span>
         <span className={s.lt}></span>
      </span>
   )
}

export default Loader;