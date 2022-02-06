import { useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import Search from '../Search';
import StylePanel from '../TextEditor/StylePanel';
import BlueButton from '../BlueButton';
import s from './styles.module.css';
import { useSlate } from 'slate-react';



const Navigation = props => {
   const navigate = useNavigate();
   const editor = useSlate();

   const goTo = useCallback(
      () => {
         navigate(`/edit-post`)
      },
      [navigate],
   );

   const savePost = useCallback(
      () => {
         const content = JSON.stringify(editor.children);
         // TO DO send to server to save
         // Redirect if success
      },
      [editor],
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
               <Route path="/*" element={<BlueButton title="Save" handleClick={savePost} />}>
                  <Route path="edit-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>
         </div>
      </nav>
   )
}


export default Navigation;
