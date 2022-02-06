import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Logo from '../Logo';
import Search from '../Search';
import StylePanel from '../TextEditor/StylePanel';
import BlueButton from '../BlueButton';
import s from './styles.module.css';




const Navigation = props => {
   const navigate = useNavigate();

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
               <Route path="/*" element={<BlueButton title="Add new tip" handleClick={() => navigate(`/edit-post`)} />} />
               <Route path="/*" element={<BlueButton title="Save" handleClick={() => null} />}>
                  <Route path="edit-post" element={<></>} />
                  <Route path="edit-post/:id" element={<></>} />
               </Route>
            </Routes>
         </div>
      </nav>
   )
}


export default Navigation;
