import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { serializeToJSX } from '../TextEditor/utils';
import s from '../TextEditor/styles.module.css';

const Post = props => {
   const { isLoading, error, post } = useSelector(state => state.post);

   if (isLoading) {
      return <div>Post is Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   const children = JSON.parse(post.content);

   return (
      <div className={s.editorBox}>
         {children.map((el, i) => <Fragment key={i}>{serializeToJSX(el)}</Fragment>)}
      </div>
   )
}

export default Post;