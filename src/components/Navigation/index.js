import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import Search from '../Search';
import StylePanel from '../TextEditor/StylePanel';
import BlueButton from '../BlueButton';
import s from './styles.module.css';
import { useSlate } from 'slate-react';
import { setError } from '../../actions/error';
import { createPost, updatePost, setPost } from '../../actions/post';
import { getSections } from '../../actions/sections';
import { initState } from '../../reducers/post';
import { EMPTY_DOC, ZERO_SELECTION } from '../TextEditor/constants';

const Navigation = props => {
   const editor = useSlate();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [isSaving, setSaving] = useState(false);
   const { post } = useSelector(state => state.post);

   const goTo = useCallback(
      () => {
         editor.children = EMPTY_DOC;
         editor.selection = ZERO_SELECTION;
         dispatch(setPost(initState.post));
         navigate(`/edit-post`);
      },
      [dispatch, navigate, editor]
   );

   const handleSaveClick = useCallback(
      async (e) => {
         try {
            if (!post.section.title) {
               dispatch(setError([`Section title is required`]));
               return;
            }

            if (!post.shortTitle) {
               dispatch(setError([`Post title is required`]));
               return;
            }

            setSaving(prev => true);
            const content = JSON.stringify(editor.children);
            post.content = content;

            let newPost;
            if (post.id !== undefined && post.id.toString()) await updatePost(post);
            else newPost = await createPost(post);
            
            dispatch(getSections());
            navigate(`/post/${newPost ? newPost.id : post.id}`);

         } catch (error) {
            if (error.response && error.response.data) dispatch(setError(error.response.data));
            else dispatch(setError([error.message]));
         }
         setSaving(prev => false);

      },
      [dispatch, editor, navigate, post]
   );

   return (
      <nav>
         <div className={`${s.navBox} content`}>
            <Logo />

            <Routes>
               <Route path="/*" element={<Search />} />
               <Route path="/*" element={<StylePanel />}>
                  <Route path="edit-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>

            <Routes>
               <Route path="/*" element={<BlueButton title="Add new tip" handleClick={goTo} />} />
               <Route path="/*" element={<BlueButton title="Save" handleClick={handleSaveClick} isLoading={isSaving} />}>
                  <Route path="edit-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>
         </div>
      </nav>
   )
}

export default Navigation;
