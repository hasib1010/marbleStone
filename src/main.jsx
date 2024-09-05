import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
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
import DynamicProperties from './Components/Admin/DynamicProperties/DynamicProperties.jsx';
import PostProperties from './Components/Admin/DynamicProperties/PostProperties.jsx';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: '/home', element: <App /> },
      { path: '/about', element: <About /> },
      { path: '/blogs', element: <BlogMain /> },
      { path: '/blogs/:id', element: <BlogLayout /> },
      { path: '/property-management', element: <PropertyManagement /> },
      { path: '/owners', element: <Resources /> },
      { path: '/owners/owner-resources', element: <Resources /> },
      { path: '/residents', element: <ResidentResources /> },
      { path: '/residents/residents-resources', element: <ResidentResources /> },
      { path: '/contact', element: <Contact /> },
      { path: '/rentals', element: <Properties /> },
      { path: '/rentals/:id', element: <PropertyLayout /> },
      { path: '/team', element: <TeamPage /> },
      { path: '/team/:id', element: <AgentDetails /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <SignUp /> },
      { path: '/admin', element: <PrivateRoutes><AdminPanel /></PrivateRoutes>, },
      { path: '/admin/dynamic_blogs', element: <PrivateRoutes><DynamicBlogs /></PrivateRoutes> },
      { path: '/admin/dynamic_blogs/edit', element: <PrivateRoutes><EditBlog /></PrivateRoutes> },
      { path: '/admin/dynamic_blogs/update', element: <PrivateRoutes><ListedBlogs /></PrivateRoutes> },
      { path: '/admin/dynamic_blogs/updateBlog/:id', element: <PrivateRoutes><UpdateBlog /></PrivateRoutes> },
      { path: '/admin/dynamic_blogs/delete', element: <PrivateRoutes><DeleteBlog /></PrivateRoutes> },
      { path: '/admin/users', element: <PrivateRoutes><Users /></PrivateRoutes> },
      { path: '/admin/users/:id', element: <PrivateRoutes><UserDetails /></PrivateRoutes> },
      { path: '/admin/profile_dashboard', element: <PrivateRoutes><ProfileDashboard /></PrivateRoutes> },
      { path: '/admin/properties', element: <PrivateRoutes><DynamicProperties/></PrivateRoutes> },
      { path: '/admin/properties/edit', element: <PrivateRoutes><PostProperties/></PrivateRoutes> },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
