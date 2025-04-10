const express = require('express');
const router = express.Router();
const User = require('../models/User'); // adjust path as needed

// Register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Create new user
    const user = await User.create({ name, email, password });

    res.status(201).json({ msg: 'User registered successfully', user });
    console.log("New User Added")
  } catch (error) {
    console.error('Error in registration:', error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});


// Login user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
      }
  
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ msg: 'Invalid credentials' });
      }
  
      res.status(200).json({ msg: 'Login successful', user });
    } catch (error) {
      console.error('Login error:', error.message);
      res.status(500).json({ msg: 'Server error' });
    }
  });

module.exports = router;