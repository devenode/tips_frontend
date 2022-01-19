import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

const WithMenuLayout = props => {

   return (
      <div className="two-clmns">
         <div><SideMenu /></div>
         <div><Outlet /></div>
      </div>
   )
}

export default WithMenuLayout
