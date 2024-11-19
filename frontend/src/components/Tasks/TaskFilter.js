import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskFilter = () => {
  const { filterTasks } = useContext(TaskContext);

  const handleFilter = (status) => {
    console.log(filterTasks(status));
  };

  return (
    <div>
      <button onClick={() => handleFilter('todo')}>Todo</button>
      <button onClick={() => handleFilter('pending')}>Pending</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
    </div>
  );
};

export default TaskFilter;
