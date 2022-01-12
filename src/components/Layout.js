import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';


const Layout = props => {
   return (
      <div className="content">
         <Navigation />

         <Outlet />
      </div>
   )
}


export default Layout
