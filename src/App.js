import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import Notfound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  )
}

export default App
