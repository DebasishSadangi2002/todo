const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');

MONGO_URI = 'mongodb://mongo:eWDpnvbFCNQQBExbRNrYPNqubGOtOLwP@junction.proxy.rlwy.net:23346'

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
