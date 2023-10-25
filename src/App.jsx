import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import './App.css'

function App() {
  const root = import.meta.env.BASE_URL;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={root} element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
