import TextType from '../TextType';
import TextBold from '../TextBold';
import TextCursive from '../TextCursive';
import TextUnderline from '../TextUnderline';
import TextUrl from '../TextUrl';
import TextList from '../TextList';
import s from './styles.module.css';

const EditTextPanel = props => {
   return (
      <div className={s.textPanelBox}>
         <TextType />
         <TextBold />
         <TextCursive />
         <TextUnderline />
         <TextUrl />
         <TextList />
      </div>
   )
}



export default EditTextPanel
