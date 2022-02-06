import TextEditor from '../../components/TextEditor';
import Dropdown from '../../components/Dropdown';
import s from './styles.module.css';

const EditPost = props => {
   const sectionTitle = <input type="text" placeholder="Section title..."/>
   const postTitle = <input type="text" placeholder="Short post title..."/>

   let sections = [
      <p>Section #1 title</p>,
      <p>Section #2 title</p>,
      <p>Section #3 title</p>
   ];

   let posts = [
      <p>Post #1 title</p>,
      <p>Post #2 title</p>,
      <p>Post #3 title</p>
   ];

   return (
      <>
         <div className={s.postTitlesBox}>
            <Dropdown options={sections} label={sectionTitle} />
            <Dropdown options={posts} label={postTitle} />
         </div>
         <TextEditor />
      </>
   )
}


export default EditPost;
