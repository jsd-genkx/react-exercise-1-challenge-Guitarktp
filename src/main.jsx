import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import PageOne from './components/1.2_pages/Page01'
import PageTwo from './components/1.2_pages/Page02'
import PageThree from './components/1.2_pages/Page03'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      }
    ]
  },
  {
    path: "/page01",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PageOne />
      }
    ]
  },
  {
    path: "/page02",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PageTwo />
      }
    ]
  },
  {
    path: "/page03",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PageThree />
      }
    ]
  },
  






]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
