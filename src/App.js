import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import MainLayout from './layouts/MainLayout';
import WithMenuLayout from './layouts/WithMenuLayout';
import NoMenuLayout from './layouts/NoMenuLayout';
import Error404 from './pages/Error404';
import Post from './components/Post';
const EditPost = React.lazy(() => import('./pages/EditPost'));




const App = props => {
   return (
      <Routes>
         <Route path="/*" element={<MainLayout />}>

            <Route path="/*" element={<WithMenuLayout />}>
               <Route index element={<Post />} />
               <Route path="post/:id" element={<Post />} />
            </Route>

            <Route path="/*" element={<NoMenuLayout />}>
               <Route path="create-post" element={<Suspense fallback={<PageLoader />}><EditPost /></Suspense>} />
               <Route path="edit-post/:id" element={<Suspense fallback={<PageLoader />}><EditPost /></Suspense>} />
               <Route path="*" element={<Error404 />} />
            </Route>

         </Route>
      </Routes>
   )
}


export default App
