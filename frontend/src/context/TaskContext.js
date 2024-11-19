import React, { createContext, useState, useContext } from 'react';
import axiosInstance from '../components/api';
import { AuthContext } from './AuthContext';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  const authHeader = () => ({
    headers: { Authorization: `Bearer ${user.token}` },
  });

  // Add Task
  const addTask = async (task) => {
    try {
      const response = await axiosInstance.post('/tasks', task, authHeader());
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error('Add Task error:', error.response?.data?.message || error.message);
    }
  };

  // Update Task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axiosInstance.put(`/tasks/${id}`, updatedTask, authHeader());
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? response.data : task))
      );
    } catch (error) {
      console.error('Update Task error:', error.response?.data?.message || error.message);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await axiosInstance.delete(`/tasks/${id}`, authHeader());
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Delete Task error:', error.response?.data?.message || error.message);
    }
  };

  // Sort Tasks by Due Date
  const sortByDueDate = async () => {
    try {
      const response = await axiosInstance.get('/tasks', authHeader());
      setTasks(
        response.data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      );
    } catch (error) {
      console.error('Sort Tasks error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, sortByDueDate }}>
      {children}
    </TaskContext.Provider>
  );
};
