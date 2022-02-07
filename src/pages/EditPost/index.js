import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextEditor from '../../components/TextEditor';
import Dropdown from '../../components/Dropdown';
import s from './styles.module.css';
import { setPostSection, setPostShortTitle } from '../../actions/post';

const EditPost = props => {
   const { shortTitle, section: { title: sectionTitle } } = useSelector(state => state.post);
   const dispatch = useDispatch();

   const handleSectionChange = e => {
      dispatch(setPostSection(e.target.value));
   }

   const handleShortChange = e => {
      dispatch(setPostShortTitle(e.target.value));
   }

   const handleSectionClick = e => {
      dispatch(setPostSection(e.target.innerHTML));
   }

   const handlePostClick = e => {
      dispatch(setPostShortTitle(e.target.innerHTML));
   }

   const sectionTitleInput = <Input placeholder="Section title..." value={sectionTitle} handleChange={handleSectionChange} />
   const shortTitleInput = <Input placeholder="Short post title..." value={shortTitle} handleChange={handleShortChange} />

   // TO DO get list of options
   const sections = [
      <Option title="Section #1 title" handleClick={handleSectionClick} />,
      <Option title="Section #2 title" handleClick={handleSectionClick} />,
      <Option title="Section #3 title" handleClick={handleSectionClick} />,
   ];

   const posts = [
      <Option title="Post #1 title" handleClick={handlePostClick} />,
      <Option title="Post #2 title" handleClick={handlePostClick} />,
      <Option title="Post #3 title" handleClick={handlePostClick} />,
   ];

   return (
      <>
         <div className={s.postTitlesBox}>
            <Dropdown options={sections} label={sectionTitleInput} optionsClasses={s.optionsList} />
            <Dropdown options={posts} label={shortTitleInput} optionsClasses={s.optionsList} />
         </div>
         <TextEditor />
      </>
   )
}

const Input = props => {
   const { value, placeholder, handleChange } = props;

   return (
      <input
         type="text"
         placeholder={placeholder}
         value={value || ``}
         onChange={handleChange} />
   )
}

const Option = props => {
   const { title, handleClick } = props;
   const [isHovered, setHovered] = useState(false);

   const handleMouseOver = e => {
      setHovered(true);
   }

   const handleMouseOut = e => {
      setHovered(false);
   }

   return <p
      style={{ backgroundColor: isHovered ? `#f5f5f5` : `unset` }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>{title}</p>
}

export default EditPost;
