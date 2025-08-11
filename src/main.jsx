import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login.jsx'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "about",
      element: <App />,
      },
      { path: "events",
      element: <App />,
      },
      { path: "register", 
      element: <App />,
      },
      { path: "logout", 
      element: <App />,
      },
    ],
  },
  { path: "home", 
    element: <Home />,
  },
  { path: "login", 
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
