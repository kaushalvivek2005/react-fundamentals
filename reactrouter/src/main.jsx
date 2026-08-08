import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About_us/About.jsx'
import Contact from './components/Contact_us/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}>
      <Route path='kaushal'/>
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
