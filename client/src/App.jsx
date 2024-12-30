
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useSession from "./hooks/Authentication/useSession";



// Components Home
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Treatments from "./pages/Treatments/Treatments";
import Contact from "./pages/Contact/Contact";

// Admin routes
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import AdminAppointments from "./pages/Dashboard/AdminAppointments";
import AdminBlogPosts from "./pages/Dashboard/AdminBlogPosts";

// Authentication components
import Signup from "./pages/Authentication/Signup";
import SignIn from "./pages/Authentication/SignIn";
// import ForgotPassword from "./pages/Authentication/ForgotPassword";
// import VerifyEmail from "./pages/Authentication/VerifyEmail";
// import ResetPassword from "./pages/Authentication/ResetPassword";

// Layouts  
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import ToastContainers from "./components/Toast/ToastContainer";


// Loader
import Loader, { LoaderWithImage } from "./components/Loader/Loader";
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import ExpertsList from "./pages/Dashboard/ExpertsList";
import AppointmentList from "./pages/Dashboard/AppointmentList";
import BlogEditor from "./pages/Dashboard/BlogEditor";

export default function App() {
  const { isLoggedIn, isLoading } = useSession();
  // Show loader until session is fetched
  if (isLoading) return (
    <div className="flex bg-black h-screen justify-center items-center">
      <LoaderWithImage />;
    </div>

  );


  // Authentication routes
  const authRoutes = [
    { path: "/login", element: <SignIn /> },
    { path: "/signup", element: <Signup /> },
    // { path: "/authentication/confirmation/:token", element: <VerifyEmail /> },
    // { path: "/forgotpassword", element: <ForgotPassword /> },
    // { path: "/authentication/resetPassword/:token", element: <ResetPassword /> },
  ];

  // Main routes for logged-in users
  const mainRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/treatments", element: <Treatments /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <Blog /> },
  ];

  // Admin routes (only accessible if logged in as admin)
  const adminRoutes = [
    // { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/sidebar", element: <Sidebar /> },
    { path: "/appointments", element: <AppointmentList /> },
    { path: "/blogeditor", element: <BlogEditor /> },
    { path: "/expert", element: <ExpertsList /> },
  ];


  // Function to render routes with the specified layout
  const renderRoutes = (layout, routes) => (
    <Route path={layout.path} element={layout.component}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  );

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes({ path: "", component: <MainLayout /> }, mainRoutes)}
        {renderRoutes({ path: "", component: <AuthLayout /> }, authRoutes)}
        {renderRoutes({ path: "", component: <AdminLayout /> }, adminRoutes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainers />
    </BrowserRouter>
  );
}
