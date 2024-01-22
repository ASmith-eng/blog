import { HashRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home';
import Post from './pages/post';
import PageNotFound from './pages/PageNotFound';
import './App.css'

function App() {
  const routeParams = useParams();

  console.log(routeParams);
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:title" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
