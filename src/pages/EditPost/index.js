import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSlate } from 'slate-react';
import { useParams } from 'react-router-dom';
import TextEditor from '../../components/TextEditor';
import Dropdown from '../../components/Dropdown';
import s from './styles.module.css';
import { setPostSection, setPostShortTitle } from '../../actions/post';
import { getSections } from '../../actions/sections';
import { getPost, isPostLoading } from '../../actions/post';

const EditPost = props => {
   const editor = useSlate();
   const { postId } = useParams();
   const { sections } = useSelector(state => state.sections);
   const { isLoading, error,
      post: { id, shortTitle, content,
         section: { title: sectionTitle
         } } } = useSelector(state => state.post);

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
      if (!sections.length) {
         dispatch(getSections());
      }
   }, [dispatch, sections]);

   useEffect(() => {
      if (!id && postId) {
         dispatch(getPost(postId));
      }

      if (!id && !postId) {
         dispatch(isPostLoading(false));
      }
   }, [dispatch, id, postId]);

   useEffect(() => {
      if (content) {
         editor.children = JSON.parse(content);
      }
   }, [editor, content]);

   if (isLoading) {
      return <div>Post is loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   const sectionTitleInput = <Input
      placeholder="Section title..."
      maxLength="50"
      value={sectionTitle}
      handleChange={handleSectionChange} />

   let sectionsOptions = [];
   if (sections.length) {
      if (sectionTitle) {
         sectionsOptions = sections.filter(el => {
            const lowerTitle = el.title.toLowerCase();
            const lowerInput = sectionTitle.toLowerCase();
            return lowerTitle.indexOf(lowerInput) !== -1;
         }).map(el => {
            return <Option key={el.id} title={el.title} handleClick={handleSectionClick} />
         });
      } else {
         sectionsOptions = sections.map(el => {
            return <Option key={el.id} title={el.title} handleClick={handleSectionClick} />
         });
      }
   }

   return (
      <>
         <div className={s.postTitlesBox}>
            <Dropdown options={sectionsOptions} label={sectionTitleInput} optionsClasses={s.optionsList} />
            <Input placeholder="Short post title..." maxLength="50" value={shortTitle} handleChange={handleShortChange} />
         </div>
         <TextEditor />
      </>
   )
}

const Input = props => {
   const { value, placeholder, handleChange, maxLength } = props;

   return (
      <input
         maxLength={maxLength}
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
