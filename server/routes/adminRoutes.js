const express = require('express');
const router = express.Router();

// Admin Dashboard
router.get('/dashboard', (req, res) => {
  res.send("Admin dashboard endpoint");
});

// View Analytics
router.get('/analytics', (req, res) => {
  res.send("Analytics endpoint");
});

// Control Queue
router.post('/control', (req, res) => {
  res.send("Queue control endpoint");
});

module.exports = router;
