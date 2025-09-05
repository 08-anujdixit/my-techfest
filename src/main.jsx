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
import UserProfile from './pages/userProfile/UserProfile.jsx'
import RegistrationPage from './pages/RegistrationPage'
import LeaderboardPage from './pages/LeaderboardPage'
import AboutPage from './pages/AboutPage'
import CodeAThon from './pages/hackathon/CodeAThon'
import Activate from './components/Activate'
import Expo from "./pages/expo/Expo";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "", 
        element: <Activate />,
      },
      { path: "home", 
        element: <HomePage />,
      },
      { path: "profile", 
        element: <UserProfile />,
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
      { path: "expo", 
        element: <Expo />,
      },
      { path: "register", 
        element: <RegistrationPage />,
      },
      { path: "leaderboard", 
        element: <LeaderboardPage />,
      },
    ],
  },
  { path: "signup", 
    element: <SignupPage />,
  },
  { path: "login", 
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={userStore}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
