
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useSession from "./hooks/Authentication/useSession";



// Components Home
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Treatments from "./pages/Treatments/Treatments";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import Profile from "./pages/Profile/Profile";

// Admin routes
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import AdminAppointments from "./pages/Dashboard/AdminAppointments";
import AdminBlogPosts from "./pages/Dashboard/AdminBlogPosts";

// Authentication components
import Signup from "./pages/Authentication/Signup";
import SignIn from "./pages/Authentication/SignIn";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import EmailVerification from "./pages/Authentication/verification";
import ResetPassword from "./pages/Authentication/ResetPassword";

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
import Blogsshow from "./pages/Dashboard/Blogsshow";
import useGetAllBlogs from "./hooks/blog/useGetAllBlogs";
import TreatmentsPage from "./pages/Treatments/TreatmentsPage";



export default function App() {
  const { isLoggedIn, isLoading } = useSession();
  const { blogs } = useGetAllBlogs();
  // Show loader until session is fetched
  // if (isLoading) return (
  //   <div className="flex bg-black h-screen justify-center items-center">
  //     <LoaderWithImage />;
  //   </div>

  // );


  // Authentication routes
  const authRoutes = [
    { path: "/login", element: <SignIn /> },
    { path: "/signup", element: <Signup /> },
    { path: "/authentication/confirmation/:token", element: <EmailVerification /> },
    { path: "/forgotpassword", element: <ForgotPassword /> },
    { path: "/authentication/resetPassword/:token", element: <ResetPassword /> },
  ];

  // Main routes for logged-in users
  const mainRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/treatments", element: <Treatments /> },
    { path: "/treatments/:treatmentId", element: <TreatmentsPage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <Blog /> },
    { path: "/appointment", element: <Appointment /> },
    { path: "/profile/:id", element: <Profile /> },
  ];

  // Admin routes (only accessible if logged in as admin)
  const adminRoutes = [
    // { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/appointments", element: <AppointmentList /> },
    { path: "/blogeditor", element: <BlogEditor /> },
    { path: "/blogshow", element: <Blogsshow /> },
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
