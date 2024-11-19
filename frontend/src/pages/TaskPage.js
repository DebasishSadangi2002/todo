import React from 'react';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';
import TaskFilter from '../components/Tasks/TaskFilter';

const TaskPage = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default TaskPage;
