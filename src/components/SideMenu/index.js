import PropTypes from 'prop-types';
import s from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrow from '../../icons/arrow-down.svg';


const SideMenu = props => {
   const { sections } = props;

   const activeSectionId = useSelector(state => `1`);
   const activeSubectionId = useSelector(state => `1`);

   return (
      <ul className={s.sideMenuBox}>
         {
            sections.map(section => {
               return (
                  <li key={section.id} className={section.id === activeSectionId ? s.activeSection : null}>
                     <div>
                        <img src={arrow} alt="Arrow down" />
                        <div className={s.dot}></div>
                        <p>{section.title}</p>
                     </div>

                     <ul className={s.subsectionBox}>
                        {
                           section.subsections.map(subsection => {
                              return (
                                 <li key={subsection.id} className={subsection.id === activeSubectionId ? s.activeSubsection : null}>
                                    <Link to={`/post/${subsection.id}`}>{subsection.title}</Link>
                                 </li>
                              )
                           })
                        }
                     </ul>
                  </li>
               )
            })
         }
      </ul>
   )
}

SideMenu.propTypes = {
   sections: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subsections: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired
      })).isRequired
   })).isRequired
}

export default SideMenu
