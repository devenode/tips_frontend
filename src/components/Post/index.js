import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { serializeToJSX } from '../TextEditor/utils';
import { EMPTY_DOC } from '../TextEditor/constants';
import { useSelector } from 'react-redux';
import s from '../TextEditor/styles.module.css';
import req from '../../utils/axios';

const Post = props => {
   let { postId } = useParams();
   const { sections } = useSelector(state => state.sections);
   const [{ isLoading, error, post }, setPost] = useState({
      isLoading: true,
      error: null,
      post: null
   });

   if (!postId && sections) postId = sections[0]?.posts[0].id;
   const children = post ? JSON.parse(post.content) : EMPTY_DOC;

   useEffect(
      () => {
         (async () => {
            try {
               if (!postId) return;
               setPost(prev => { return { ...prev, isLoading: true } });
               const { data: post } = await req.get(`/post/${postId}`);
               setPost(prev => {
                  return {
                     ...prev,
                     isLoading: false,
                     error: null,
                     post
                  }
               });
            } catch (error) {
               setPost(prev => {
                  return {
                     ...prev,
                     isLoading: false,
                     error: error.response?.data ? error.response.data : error.message,
                  }
               });
            }
         })();
      },
      [postId]
   );

   if (isLoading) {
      return <div>Post is Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   return (
      <>
         <Link className={s.editLink} to={`/edit-post/${post.id}`}>Edit</Link>
         <div className={`${s.editorBox} hide-scrollbar`}>
            {children.map((el, i) => <Fragment key={i}>{serializeToJSX(el)}</Fragment>)}
         </div>
      </>
   )
}

export default Post;