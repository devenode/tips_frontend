import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Layout = props => {
   return (
      <>
         <Navigation />
         <div className="content nav-margin">
            <Outlet />
         </div>
      </>
   )
}


export default Layout
