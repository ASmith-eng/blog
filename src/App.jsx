import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import DataProvider from './context/dataContext';
import Home from './pages/Home';
import Home2 from './components/PostGrid';
import Post from './pages/Post';
import PageNotFound from './pages/PageNotFound';
import './App.css'

function App() {
  const routeParams = useParams();

  // console.log(routeParams);
  return (
    <>
      <DataProvider>
        {/* <HashRouter basename="/"> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home2 />} />
            {/* <Route path="tag/:category" element={<Category />} /> */}
            <Route path="post/:filename" element={<Post />} />
            <Route path="NotFound" element={<PageNotFound />}/>
            <Route path="*" element={<Navigate to="/NotFound" />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
