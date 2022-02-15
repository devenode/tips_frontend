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
import { createPost, setPost } from '../../actions/post';
import { getSections } from '../../actions/sections';
import { initState } from '../../reducers/post';
import { EMPTY_DOC } from '../TextEditor/constants';

const Navigation = props => {
   const editor = useSlate();
   const [isSaving, setSaving] = useState(false);
   const { post } = useSelector(state => state.post);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const goTo = useCallback(
      () => {
         dispatch(setPost(initState.post));
         editor.children = EMPTY_DOC;
         navigate(`/edit-post`);
      },
      [dispatch, navigate, editor]
   );

   const handleSaveClick = useCallback(async (e) => {
         try {
            if (!post.section.title) {
               dispatch(setError(`Section title is required`));
               return;
            }

            if (!post.shortTitle) {
               dispatch(setError(`Post title is required`));
               return;
            }

            setSaving(prev => true);
            const content = JSON.stringify(editor.children);
            post.content = content;
            const newPost = await createPost(post);
            dispatch(getSections());
            navigate(`/post/${newPost.id}`);

         } catch (error) {
            dispatch(setError(error.message));
         }
         setSaving(prev => false);
         
      }, [dispatch, editor, navigate, post]
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
