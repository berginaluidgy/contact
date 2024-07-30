import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AddContactButton from './component/contact.jsx'
import ProgressComponent from './component/barre.jsx'

const root=createBrowserRouter([
  {
    path:'',
    element:<App/>
  },{
    path:'/Addcontact',
    element:<AddContactButton/>
  }
  ,{
    path:'/progress',
    element:<ProgressComponent/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>,
)
