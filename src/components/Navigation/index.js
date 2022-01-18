import { Routes, Route } from 'react-router-dom';
import Logo from '../Logo';
import Search from '../Search';
import EditTextPanel from '../EditTextPanel';
import BlueButton from '../BlueButton';
import s from './styles.module.css';
import { useNavigate } from "react-router-dom";



const Navigation = props => {
   const navigate = useNavigate();

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
               <Route path="/*" element={<BlueButton title="Add new tip" handleClick={() => navigate(`/create-post`)} />} />

               {/* TO DO - create Client api for posts */}
               <Route path="/*" element={<BlueButton title="Save" handleClick={() => null} />}>
                  <Route path="create-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>
         </div>
      </nav>
   )
}


export default Navigation
