import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import Notfound from './pages/NotFound/NotFound'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
