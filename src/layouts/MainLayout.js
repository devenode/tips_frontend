import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Layout = props => {
   return (
      <>
         <Navigation />
         <div className="content">

            <Outlet />
         </div>
      </>
   )
}


export default Layout
