const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['todo', 'pending', 'completed'], default: 'todo' },
  dueDate: { type: Date, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
