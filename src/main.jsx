import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/Error/ErrorPage.jsx';
import Root from './Root.jsx';
import BlogMain from './Components/Pages/Blogs/BlogMain.jsx';
import BlogLayout from './Components/Pages/Blogs/BlogLayout.jsx';
import About from './Components/Pages/About/About.jsx';
import PropertyManagement from './Components/Pages/PropertyManagement/PropertyManagement.jsx';
import Resources from './Components/Pages/Resources/Resources.jsx';
import ResidentResources from './Components/Pages/Resources/ResidentResources.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
import Properties from './Components/Pages/Properties/Properties.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      }, {
        path: "/about",
        element: <About></About>,
      }, {
        path: "/blogs",
        loader: () => fetch('data.json'),
        element: <BlogMain></BlogMain>
      },
      {
        path: "/blogs/:id",
        element: <BlogLayout></BlogLayout>
      },
      {
        path: "/property-management",
        element: <PropertyManagement></PropertyManagement>
      },
      {
        path: "/owners",
        element: <Resources></Resources>
      },
      {
        path: "owners/owner-resources",
        element: <Resources></Resources>
      },
      {
        path: "/residents",
        element: <ResidentResources></ResidentResources>
      }
      ,
      {
        path: "/residents/residents-resources",
        element: <ResidentResources></ResidentResources>
      }
      ,
      {
        path: "/blogs",
        element: <BlogMain></BlogMain>
      }
      ,
      {
        path: "/contact",
        element:<Contact/>
      }
      ,
      {
        path: "/rentals",
        element:<Properties/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
