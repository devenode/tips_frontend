import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Error404 from './pages/Error404';
const Post = React.lazy(() => import('./pages/Post'));
const CreatePost = React.lazy(() => import('./pages/CreatePost'));
const EditPost = React.lazy(() => import('./pages/EditPost'));




const App = props => {
   return (
      <Routes>
         <Route path="/*" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<Suspense fallback={<PageLoader />}><Post /></Suspense>} />
            <Route path="create-post" element={<Suspense fallback={<PageLoader />}><CreatePost /></Suspense>} />
            <Route path="edit-post/:id" element={<Suspense fallback={<PageLoader />}><EditPost /></Suspense>} />
            <Route path="*" element={<Error404 />} />
         </Route>
      </Routes>
   )
}


export default App
