const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

JWT_SECRET = '1234567'
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ username, password });
    res.status(201).json({ id: user._id, username: user.username, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ id: user._id, username: user.username, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
