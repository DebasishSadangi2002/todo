import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await axiosInstance.post('/users/login', credentials);
      setUser({ username: response.data.username, token: response.data.token });
      navigate('/tasks');
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
