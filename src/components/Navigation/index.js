import { Routes, Route } from 'react-router-dom';
import Logo from '../Logo';
import Search from '../Search';
import EditTextPanel from '../EditTextPanel';
import AddNewButton from '../AddNewButton';
import SaveButton from '../SaveButton';
import s from './styles.module.css';



const Navigation = props => {
   return (
      <nav>
         <div className={`${s.navBox} content`}>
            <Logo />

            <Routes>
               <Route path="/*" element={<Search />} />

               <Route path="/*" element={<EditTextPanel />}>
                  <Route path="create-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>

            <Routes>
               <Route path="/*" element={<AddNewButton />} />

               <Route path="/*" element={<SaveButton />}>
                  <Route path="create-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>
         </div>
      </nav>
   )
}


export default Navigation
