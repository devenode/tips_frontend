import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import MainLayout from './layouts/MainLayout';
import WithMenuLayout from './layouts/WithMenuLayout';
import NoMenuLayout from './layouts/NoMenuLayout';
import Error404 from './pages/Error404';
import { PostWithEdit } from './components/Post';
import SlateContext from './components/TextEditor/context';
import Error from './components/Error';
const EditPost = React.lazy(() => import('./pages/EditPost'));




const App = () => {
   return (
      <SlateContext>
         <Error />
         <Routes>
            <Route path="/*" element={<MainLayout />}>

               <Route path="/*" element={<WithMenuLayout />}>
                  <Route index element={<PostWithEdit />} />
                  <Route path="post/:postId" element={<PostWithEdit />} />
               </Route>

               <Route path="/*" element={<NoMenuLayout />}>
                  <Route path="edit-post" element={<Suspense fallback={<PageLoader />}><EditPost /></Suspense>} />
                  <Route path="edit-post/:postId" element={<Suspense fallback={<PageLoader />}><EditPost /></Suspense>} />
                  <Route path="*" element={<Error404 />} />
               </Route>

            </Route>
         </Routes>
      </SlateContext>
   )
}


export default App;
