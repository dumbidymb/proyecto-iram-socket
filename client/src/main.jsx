import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './page/login'
import Inicio from './page/Inicio'
import Registro from './page/Registro'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Registro" element={<Registro/>} />
        <Route path="/inicio" element={<Inicio/>} />
   
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
