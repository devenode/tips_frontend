import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { serializeToJSX } from '../TextEditor/utils';
import { EMPTY_DOC } from '../TextEditor/constants';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../actions/post';
import s from '../TextEditor/styles.module.css';

const Post = props => {
   let { postId } = useParams();
   const { sections } = useSelector(state => state.sections);
   const { isLoading, error, post } = useSelector(state => state.post);
   const dispatch = useDispatch();

   postId = postId || sections[0]?.posts[0]?.id;
   const children = post.content ? JSON.parse(post.content) : EMPTY_DOC;

   useEffect(
      () => {
         if (!postId) return;

         dispatch(getPost(postId));
      },
      [dispatch, postId]
   );

   if (!isLoading && !error && !post.id) {
      return <div>Nothing to show yet...</div>
   }

   if (isLoading) {
      return <div>Post is Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   return (
      <>
         <Link className={s.editLink} to={`/edit-post/${post.id}`}>Edit</Link>
         <div className={s.editorBox}>
            {children.map((el, i) => <Fragment key={i}>{serializeToJSX(el)}</Fragment>)}
         </div>
      </>
   )
}

export default Post;