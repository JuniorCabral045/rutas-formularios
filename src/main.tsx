import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutter } from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutter/>
    </BrowserRouter>
  </React.StrictMode>,
)
