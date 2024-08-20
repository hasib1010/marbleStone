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
import About from './About.jsx';
import Blog from './Components/Pages/Blogs/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },{
        path: "/about",
        element:<About></About>,
      },{
        path:"/blogs",
        loader: ()=>fetch('data.json'),
        element: <Blog></Blog>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
