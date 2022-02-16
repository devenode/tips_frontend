import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { serializeToJSX } from '../TextEditor/utils';
import s from '../TextEditor/styles.module.css';
import { EMPTY_DOC } from '../TextEditor/constants';

const Post = props => {
   const { isLoading, error, post } = useSelector(state => state.post);

   if (isLoading) {
      return <div>Post is Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   const children = post.content ? JSON.parse(post.content) : EMPTY_DOC;

   return (
      <div className={s.editorBox}>
         {children.map((el, i) => <Fragment key={i}>{serializeToJSX(el)}</Fragment>)}
      </div>
   )
}

const withEditLink = Component => () => {
   const { post } = useSelector(state => state.post);

   return (
      <>
         <Link className={s.editLink} to={`/edit-post/${post.id}`}>Edit</Link>
         <Component />
      </>
   )
}

export const PostWithEdit = withEditLink(Post);

export default Post;