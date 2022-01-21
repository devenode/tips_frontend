import Header from './Header';
import Bold from './Bold';
import Cursive from './Cursive';
import Underline from './Underline';
import Url from './Url';
import List from './List';
import s from './styles.module.css';

const EditTextPanel = props => {
   return (
      <div className={s.textPanelBox}>
         <Header />
         <Bold />
         <Cursive />
         <Underline />
         <Url />
         <List />
      </div>
   )
}



export default EditTextPanel
