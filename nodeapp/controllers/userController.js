const User = require('../models/userModel');

// Add a new user
exports.addUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Validate user credentials (Login)
exports.getUserByUsernameAndPassword = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.status(200).json({ message: 'Invalid Credentials' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
