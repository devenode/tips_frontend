import PropTypes from 'prop-types';
import s from './styles.module.css';
import { Link } from 'react-router-dom';


const index = props => {
   // const { sections } = props;
   const { sections } = {
      sections: [
         {
            id: 1,
            title: `MySQL`,
            subsections: [
               {
                  id: 1,
                  title: `Root password reset`
               },
               {
                  id: 2,
                  title: `Change user privileges`
               },
               {
                  id: 3,
                  title: `Dump db to file`
               }
            ]
         },
         {
            id: 2,
            title: `PostgreSQL`,
            subsections: []
         },
         {
            id: 3,
            title: `NginX`,
            subsections: [
               {
                  id: 1,
                  title: `Setup proxy server`
               },
               {
                  id: 2,
                  title: `SSL adding`
               },
               {
                  id: 3,
                  title: `Standard setup file`
               },
               {
                  id: 4,
                  title: `Certbot setup`
               },
            ]
         },
      ]
   }

   return (
      <ul className={s.sideMenuBox}>
         {
            sections.map(section => {
               return (
                  <li key={section.id} className={s.sectionBox}>
                     <p>{section.title}</p>
                     {
                        section.subsections.length > 0 &&
                        <ul>
                           {
                              section.subsections.map(subsection => {
                                 return (
                                    <li key={subsection.id}>
                                       <Link to={`/post/${subsection.id}`}>{subsection.title}</Link>
                                    </li>
                                 )
                              })
                           }
                        </ul>
                     }
                  </li>
               )
            })
         }
      </ul>
   )
}

index.propTypes = {

}

export default index
