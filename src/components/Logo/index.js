import { Link } from 'react-router-dom';
import s from './styles.module.css';

export const Logo = props => {
   return (
      <p className={s.mainLogo}><Link to="/">#tips</Link></p>
   )
}


export default Logo;
