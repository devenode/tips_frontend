import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

const WithMenuLayout = props => {
   // TO DO загружать с сервера актуальное меню, если оно изменилось
   const sections = [
      {
         id: `1`,
         title: `MySQL`,
         subsections: [
            {
               id: `1`,
               title: `Root password reset`
            },
            {
               id: `2`,
               title: `Change user privileges`
            },
            {
               id: `3`,
               title: `Dump db to file`
            }
         ]
      },
      {
         id: `2`,
         title: `PostgreSQL`,
         subsections: [
            {
               id: `1`,
               title: `Basics for DB`
            }
         ]
      },
      {
         id: `3`,
         title: `NginX`,
         subsections: [
            {
               id: `1`,
               title: `Setup proxy server`
            },
            {
               id: `2`,
               title: `SSL adding`
            },
            {
               id: `3`,
               title: `Standard setup file`
            },
            {
               id: `4`,
               title: `Certbot setup`
            },
         ]
      },
   ];

   return (
      <div className="two-clmns">
         <div><SideMenu sections={sections} /></div>
         <div><Outlet /></div>
      </div>
   )
}

export default WithMenuLayout
