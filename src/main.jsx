import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Error4 from './Eror4.jsx'
import SignUp from './SignUp.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

  {path:"/",element:<App/>},
  {path:"login",element:<Login/>},
  {path:"*",element:<Error4/>},
  {path:"Signup",element:<SignUp/>},

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
