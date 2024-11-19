const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).sort({ dueDate: 1 });
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  const task = await Task.create({
    user: req.user.id,
    title,
    description,
    status,
    dueDate,
  });

  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;

  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.user.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;
  task.dueDate = dueDate || task.dueDate;

  await task.save();
  res.json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.user.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

  await task.remove();
  res.json({ message: 'Task removed' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
