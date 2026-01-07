import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import AboutPage from './pages/AboutPage'
import CodeAThon from './pages/hackathon/CodeAThon'
import Activate from './components/Activate'
import Page404 from "./pages/Page404.jsx";
import UnderDevelopment from "./pages/UnderDevelopment.jsx";

const router = createBrowserRouter([
 /*  {
    path: '/',
    element: <App />,
    children: [
      { path: "", 
        element: <Activate />,
      },
      { path: "home", 
        element: <HomePage />,
      },
      { path: "about",
        element: <AboutPage />,
      },
      { path: "events",
        element: <EventsPage />,
      },
      { path: "codeathon", 
        element: <CodeAThon />,
      },
      { path: "register", 
        element: <RegistrationPage />,
      },
    ],
  }, */
  { path: "*", 
    // element: <Page404 />,
    element: <UnderDevelopment />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
