
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useSession from "./hooks/Authentication/useSession";


// Components
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";


// Authentication components
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
// import ForgotPassword from "./pages/Authentication/ForgotPassword";
// import VerifyEmail from "./pages/Authentication/VerifyEmail";
// import ResetPassword from "./pages/Authentication/ResetPassword";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import ToastContainers from "./components/Toast/ToastContainer";


// Loader
import Loader, { LoaderWithImage } from "./components/Loader/Loader";


export default function App() {
  const { isLoggedIn, isLoading } = useSession();
  // Show loader until session is fetched
  if (isLoading) return ( 
  <div className="flex bg-black h-screen justify-center items-center">
    <LoaderWithImage/>;
    </div>

); 
 

  // Authentication routes
  const authRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    // { path: "/authentication/confirmation/:token", element: <VerifyEmail /> },
    // { path: "/forgotpassword", element: <ForgotPassword /> },
    // { path: "/authentication/resetPassword/:token", element: <ResetPassword /> },
  ];

  // Main routes for logged-in users
  const mainRoutes = [
    { path: "/", element: <Home /> },
    // { path: "/search", element: <SearchPage /> },
    // { path: "/", element: <Schemes /> },
    // { path: "/profile", element: isLoggedIn ? <Profile /> : <Navigate to="/login" /> },
    // {
    //   path: "/profileupdate",
    //   element: isLoggedIn ? <ProfileUpdate /> : <Navigate to="/login" />,
    // },
    // { path: "/about", element: <About /> },
    // { path: "/services", element: <Services /> },
  ];

  // Admin routes (only accessible if logged in as admin)
  const adminRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
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
        {/* {renderRoutes({ path: "", component: <AdminLayout /> }, adminRoutes)} */}
        {/* Redirect to home if no route is found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainers />
    </BrowserRouter>
  );
}
