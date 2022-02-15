import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import Search from '../Search';
import StylePanel from '../TextEditor/StylePanel';
import BlueButton from '../BlueButton';
import s from './styles.module.css';
import { useSlate } from 'slate-react';
import { setError } from '../../actions/error';
import { savePost, setPost } from '../../actions/post';
import { initState } from '../../reducers/post';
import { EMPTY_DOC } from '../TextEditor/constants';

const Navigation = props => {
   const navigate = useNavigate();
   const editor = useSlate();
   const dispatch = useDispatch();
   const [isSaving, setSaving] = useState(false);

   const goTo = useCallback(
      () => {
         dispatch(setPost(initState.post));
         editor.children = EMPTY_DOC;
         navigate(`/edit-post`);
      },
      [dispatch, navigate, editor]
   );

   const handleSaveClick = useCallback(
      (e) => {
         try {
            setSaving(prev => true);
            const content = JSON.stringify(editor.children);
            dispatch(savePost(content));
            setSaving(prev => false);
            navigate(`/`);
         } catch (error) {
            dispatch(setError(error.message));
            setSaving(prev => false);
         }
      },
      [editor, dispatch, navigate]
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
