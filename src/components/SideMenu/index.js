import s from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../icons/arrow-down.svg';
import { getSideMenu, setActiveSection } from '../../actions/sideMenu';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SideMenu = props => {
   let { postId: chosenPostId } = useParams();

   const { isLoading, error, sections, activeSectionId, firstPostId } = useSelector(state => state.sideMenu);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getSideMenu());
   }, [dispatch]);

   const handleSectionClick = e => {
      if (activeSectionId === e.target.id) {
         dispatch(setActiveSection(null));
         return;
      }
      dispatch(setActiveSection(e.target.id));
   }

   if (!chosenPostId) {
      chosenPostId = firstPostId;
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
                           section.posts.map(post => {
                              return (
                                 <li key={post.id} className={post.id === chosenPostId ? s.activeSubsection : null}
                                 >
                                    <Link to={`/post/${post.id}`}>{post.title}</Link>
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

export default SideMenu