import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import DataProvider from './context/dataContext';
import Home from './pages/Home';
import Post from './pages/Post';
import PageNotFound from './pages/PageNotFound';
import './App.css'

function App() {
  const routeParams = useParams();

  // console.log(routeParams);
  return (
    <>
      <DataProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="tag/:category" element={<Category />} /> */}
            <Route path="post/:filename" element={<Post />} />
            <Route path="NotFound" element={<PageNotFound />}/>
            {/* <Route path="*" element={<PageNotFound />} /> */}
            <Route path="*" element={<Navigate to="/NotFound" />} />
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  )
}

export default App
