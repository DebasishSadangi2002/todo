import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskPage from './pages/TaskPage';


function App() {
  return (
    <Router>
    
      <AuthProvider>
        <TaskProvider>
            
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Routes>
        </TaskProvider>
      </AuthProvider>
    
    </Router>
  );
}

export default App;
