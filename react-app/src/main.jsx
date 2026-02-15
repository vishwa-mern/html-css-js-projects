import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './Component/context/userContextprovider';
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <BrowserRouter>
    <App /> 
  </BrowserRouter>  
   </UserContextProvider>
)
