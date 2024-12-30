import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AppointmentList from './components/AppointmentList';
import ExpertsList from './components/ExpertsList';
import BlogEditor from './components/BlogEditor';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        
        {/* Protected Routes */}
        <Route path="/admin" element={
          <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <Dashboard />
            </main>
          </div>
        } />
        <Route path="/admin/appointments" element={
          <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <AppointmentList />
            </main>
          </div>
        } />
        <Route path="/admin/experts" element={
          <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <ExpertsList />
            </main>
          </div>
        } />
        <Route path="/admin/blog" element={
          <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <BlogEditor />
            </main>
          </div>
        } />
        
        {/* Redirect root to sign in */}
        <Route path="/" element={<Navigate to="/auth/signin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;