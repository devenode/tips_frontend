import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSlate } from 'slate-react';
import { useParams } from 'react-router-dom';
import TextEditor from '../../components/TextEditor';
import Dropdown from '../../components/Dropdown';
import { setPostSection, setPostShortTitle, isPostLoading, getPost } from '../../actions/post';
import { getSections } from '../../actions/sections';
import s from './styles.module.css';

const EditPost = props => {
   const editor = useSlate();
   const { postId } = useParams();
   const { sections } = useSelector(state => state.sections);
   const { isLoading, error, post } = useSelector(state => state.post);
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

   useEffect(
      () => {
         if (!postId && !sections) dispatch(getSections());
      },
      [dispatch, postId, sections]
   );

   useEffect(
      () => {
         if (postId) dispatch(getPost(postId));
         if (!postId && !post.id) dispatch(isPostLoading(false)); // <== Allows to render page for new post creation
      },
      [dispatch, post.id, postId]
   );

   useEffect(
      () => {
         if (post.content) editor.children = JSON.parse(post.content);
      },
      [editor, post]
   );

   if (isLoading) {
      return <div>Post is loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   const sectionTitleInput = <Input
      placeholder="Section title..."
      maxLength="50"
      value={post.section.title}
      handleChange={postId ? () => { } : handleSectionChange} />

   let sectionsOptions = [];
   if (!postId && sections) {
      if (post.section.title) {
         sectionsOptions = sections.filter(el => {
            const lowerTitle = el.title.toLowerCase();
            const lowerInput = post.section.title.toLowerCase();
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
            <Input placeholder="Short post title..." maxLength="50" value={post.shortTitle} handleChange={handleShortChange} />
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