import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';


const MainLayout = props => {
   return (
      <>
         <Navigation />
         <div className="content nav-margin">
            <Outlet />
         </div>
      </>
   )
}


export default MainLayout
