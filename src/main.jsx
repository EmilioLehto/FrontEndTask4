import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Customerlist from './Components/Traininglist.jsx'
import Traininglist from './Components/Customerlist.jsx'
import Calender from './Components/Calender.jsx'
import Stats from './Components/Stats.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';




const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children:[
  
    {
      path: "Customerlist",
      element: <Customerlist />,
    },
    {
      path: "Traininglist",
    element: <Traininglist />,
    },
    {
      path: "Calender",
      element: <Calender />,
    },
    {
      path: "Stats",
    element: <Stats />,
  }


  ]
  
  }
  
  ])
  




  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
  );
  
