const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = await User.create({ username, email, password, role });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
