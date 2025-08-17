import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import userStore from './store/userStore/userStore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import AboutPage from './pages/AboutPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        { path: "", 
          element: <HomePage />,
        },
      { path: "about",
        element: <AboutPage />,
      },
      { path: "events",
        element: <EventsPage />,
      },
      { path: "register", 
        element: <RegistrationPage />,
      },
      { path: "logout", 
        element: <HomePage />,
      },
    ],
  },
  { path: "login", 
    element: <LoginPage />,
  },
  { path: "signup", 
    element: <SignupPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={userStore}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
