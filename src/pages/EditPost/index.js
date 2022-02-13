import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextEditor from '../../components/TextEditor';
import Dropdown from '../../components/Dropdown';
import s from './styles.module.css';
import { setPostSection, setPostShortTitle } from '../../actions/post';
import { getSections } from '../../actions/sections';

const EditPost = props => {
   const { sections } = useSelector(state => state.sections);
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

   useEffect(() => {
      dispatch(getSections());
      
   }, [dispatch]);

   const sectionTitleInput = <Input placeholder="Section title..." value={sectionTitle} handleChange={handleSectionChange} />
 
   let sectionsOptions = [];
   if (sections.length) {
      sectionsOptions = sections.map(el => {
         return <Option key={el.id} title={el.title} handleClick={handleSectionClick} />
      });
   }

   return (
      <>
         <div className={s.postTitlesBox}>
            <Dropdown options={sectionsOptions} label={sectionTitleInput} optionsClasses={s.optionsList} />
            <Input placeholder="Short post title..." value={shortTitle} handleChange={handleShortChange} />
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
