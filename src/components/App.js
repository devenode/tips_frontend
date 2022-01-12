import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Post from './Post';
import Error404 from './Error404';


const App = props => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="*" element={<Error404 />} />
         </Route>
      </Routes>
   )
}


export default App
