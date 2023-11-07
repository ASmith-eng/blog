import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import './App.css'

function App() {
  const root = import.meta.env.BASE_URL;

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
