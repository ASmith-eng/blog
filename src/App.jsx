import { HashRouter, Routes, Route, useParams } from 'react-router-dom'
import CategoriesProvider from './context/categoriesContext';
import Home from './pages/Home';
import Post from './pages/Post';
import PageNotFound from './pages/PageNotFound';
import './App.css'

function App() {
  const routeParams = useParams();

  // console.log(routeParams);
  return (
    <>
      <CategoriesProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="tag/:category" element={<Category />} /> */}
            <Route path="post/:title" element={<Post />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </HashRouter>
      </CategoriesProvider>
    </>
  )
}

export default App
