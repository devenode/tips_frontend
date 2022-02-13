import s from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../icons/arrow-down.svg';
import { getSections, setActiveSection } from '../../actions/sections';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SideMenu = props => {
   let { postId: chosenPostId } = useParams();

   const { isLoading, error, sections, activeSectionId } = useSelector(state => state.sections);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!sections.length) {
         dispatch(getSections());
      }
      
      if (sections.length) {
         dispatch(setActiveSection(sections[0].id));
      }
   }, [dispatch, sections]);

   const handleSectionClick = e => {
      if (activeSectionId === Number(e.target.id)) {
         dispatch(setActiveSection(null));
         return;
      }
      dispatch(setActiveSection(Number(e.target.id)));
   }

   if (!chosenPostId && sections.length) {
      chosenPostId = sections[0].Posts[0].id;
   }

   if (isLoading) {
      return (
         <div>Side menu is loading...</div>
      )
   }

   if (error) {
      return (
         <div>Side menu error: {error}</div>
      )
   }

   return (
      <ul className={s.sideMenuBox}>
         {
            sections.map(section => {
               return (
                  <li key={section.id} className={section.id === activeSectionId ? s.activeSection : null}
                  >
                     <div>
                        <img src={arrow} alt="Arrow down" />
                        <div className={s.dot}></div>
                        <p id={section.id} onClick={handleSectionClick} >{section.title}</p>
                     </div>

                     <ul className={s.postsBox}>
                        {
                           section.Posts.map(post => {
                              return (
                                 <li key={post.id} className={post.id === chosenPostId ? s.activeSubsection : null}
                                 >
                                    <Link to={`/post/${post.id}`}>{post.shortTitle}</Link>
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

export default SideMenu;