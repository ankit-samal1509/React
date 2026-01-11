import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router'
import {About, Contact, Footer, Github, Header, Home, User} from './components'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path : "/about",
        element: <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/user/:userId",
        element : <User />
      },
      {
        path : "/github",
        element : <Github />,
        loader: async () => {
          const res = await fetch('https://api.github.com/users/ankit-samal1509');
          return res.json();

      }   
    }  

    ]


  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
