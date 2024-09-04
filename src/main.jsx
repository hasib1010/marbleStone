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
import PropertyLayout from './Components/Pages/Properties/PropertyLayout.jsx';
import TeamPage from './Components/Pages/TeamPage/TeamPage.jsx';
import AgentDetails from './Components/Pages/TeamPage/AgentDetails.jsx';
import AdminPanel from './Components/Admin/AdminPanel.jsx';
import Login from './Components/Admin/Login.jsx';
import SignUp from './Components/Admin/SignUp.jsx';
import AuthProvider from './Components/Providers/Provider.jsx';
import PrivateRoutes from './Components/Private/PrivateRoute.jsx';
import ProfileDashboard from './Components/Admin/Profile/ProfileDashboard.jsx';
import DynamicBlogs from './Components/Admin/DynamicBlogs/DynamicBlogs.jsx';
import EditBlog from './Components/Admin/DynamicBlogs/EditBlog.jsx';
import DeleteBlog from './Components/Admin/DynamicBlogs/DeleteBlog/DeleteBlog.jsx';
import UpdateBlog from './Components/Admin/DynamicBlogs/UpdateBlog/UpdateBlog.jsx';
import ListedBlogs from './Components/Admin/DynamicBlogs/UpdateBlog/ListedBlogs.jsx';
import Users from './Components/Admin/Users/Users.jsx';
import UserDetails from './Components/Admin/Users/UserDetails.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      }, 
      {
        path: "/home",
        element: <App></App>,
      }, 
      {
        path: "/about",
        element: <About></About>,
      }, {
        path: "/blogs",

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
        element: <Contact />
      }
      ,
      {
        path: "/rentals",
        element: <Properties />
      }
      ,
      {
        path: "/rentals/:id",
        element: <PropertyLayout></PropertyLayout>
      }
      ,
      {
        path: "/team",
        element: <TeamPage></TeamPage>
      }
      ,
      {
        path: "/team/:id",
        element: <AgentDetails></AgentDetails>
      }
      ,
      {
        path: "/admin",
        element: <PrivateRoutes><AdminPanel></AdminPanel></PrivateRoutes>
      }
      ,
      {
        path: "/admin/dynamic_blogs",
        element: <PrivateRoutes><DynamicBlogs></DynamicBlogs></PrivateRoutes>
      }
      ,
      {
        path: "/admin/dynamic_blogs/edit",
        element: <PrivateRoutes><EditBlog></EditBlog></PrivateRoutes>
      }
      ,
      {
        path: "/admin/dynamic_blogs/update",
        element: <PrivateRoutes><ListedBlogs></ListedBlogs></PrivateRoutes>
      }
      ,
      {
        path: "/admin/dynamic_blogs/updateBlog/:id",
        element: <PrivateRoutes><UpdateBlog></UpdateBlog></PrivateRoutes>
      }
      ,
      {
        path: "/admin/dynamic_blogs/delete",
        element: <PrivateRoutes><DeleteBlog></DeleteBlog></PrivateRoutes>
      }
      ,
      {
        path: "/admin/users",
        element: <PrivateRoutes><Users></Users></PrivateRoutes>
      }
      ,
      {
        path: "/admin/users/:id",
        element: <PrivateRoutes><UserDetails></UserDetails></PrivateRoutes>
      }
      ,
      {
        path: "/login",
        element: <Login></Login>
      }
      ,
      {
        path: "/register",
        element: <SignUp></SignUp>
      }
      ,
      {
        path: "/profile_dashboard",
        element: <PrivateRoutes>
          <ProfileDashboard></ProfileDashboard>
        </PrivateRoutes>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>


)
