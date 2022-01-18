import { Outlet } from 'react-router-dom';

export const NoMenuLayout = () => {
   return (
      <div className="one-clmn">
         <Outlet />
      </div>
   )
}

export default NoMenuLayout