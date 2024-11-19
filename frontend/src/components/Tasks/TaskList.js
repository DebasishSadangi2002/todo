import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskList = () => {
  const { tasks, deleteTask, updateTask, sortByDueDate } = useContext(TaskContext);
  const [editingDueDate, setEditingDueDate] = useState(null); // Track which task is being edited

  const handleDueDateChange = (id, newDueDate) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      updateTask(id, { ...taskToUpdate, dueDate: newDueDate });
      setEditingDueDate(null); // Exit editing mode
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      updateTask(id, { ...taskToUpdate, status: newStatus });
    }
  };

  return (
    <div>
      <button onClick={sortByDueDate}>Sort by Due Date</button>
      {tasks.map((task) => (
        <div key={task.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
            <strong>Status:</strong>{' '}
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
            >
              <option value="todo">Todo</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </p>
          <p>
            <strong>Due Date:</strong>{' '}
            {editingDueDate === task.id ? (
              <span>
                <input
                  type="date"
                  value={task.dueDate}
                  onChange={(e) => handleDueDateChange(task.id, e.target.value)}
                />
                <button onClick={() => setEditingDueDate(null)}>Save</button>
              </span>
            ) : (
              <span>
                {task.dueDate || 'No Due Date Set'}{' '}
                <button onClick={() => setEditingDueDate(task.id)}>Edit</button>
              </span>
            )}
          </p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
