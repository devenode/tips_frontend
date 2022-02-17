import { useCallback, useEffect } from 'react';
import s from './styles.module.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../icons/arrow-down.svg';
import { getSections, setActiveSection } from '../../actions/sections';


const SideMenu = props => {
   let { postId } = useParams();

   const { isLoading, error, sections, activeSectionId } = useSelector(state => state.sections);
   const dispatch = useDispatch();

   if (!postId && sections.length) {
      postId = sections[0].posts[0].id;
   }

   useEffect(
      () => {
         if (!sections.length) {
            dispatch(getSections());
         }

         if (sections.length) {
            if (!postId) {
               dispatch(setActiveSection(sections[0].id));
            }
            
            if (postId) {
               const section = sections.find(sec => !!sec.posts.find(post => post.id === Number(postId)));
               if (section) dispatch(setActiveSection(section.id));
            }
         }
      },
      [dispatch, sections, postId]
   );

   const handleSectionClick = useCallback(
      (e) => {
         if (activeSectionId === Number(e.target.id)) {
            dispatch(setActiveSection(null));
            return;
         }
         
         dispatch(setActiveSection(Number(e.target.id)));
      },
      [dispatch, activeSectionId]
   );

   if (!isLoading && !error && !sections.length) {
      return (
         <div>Sections fetching isn't started...</div>
      )
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
      <ul className={`noselect ${s.sideMenuBox}`}>
         {
            sections.map(section => {
               return (
                  <li key={section.id} className={section.id === activeSectionId ? s.activeSection : null}
                  >
                     <div>
                        <img src={arrow} alt="Arrow down" />
                        <div className={s.dot}><div></div></div>
                        <p id={section.id} onClick={handleSectionClick} >{section.title}</p>
                     </div>

                     <ul className={s.postsBox}>
                        {
                           section.posts.map(post => {
                              return (
                                 <li key={post.id} className={post.id === Number(postId) ? s.activeSubsection : null}
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