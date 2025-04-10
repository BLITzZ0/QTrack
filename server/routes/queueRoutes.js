const express = require('express');
const router = express.Router();

// Join Queue
router.post('/join', (req, res) => {
  res.send("Join queue endpoint");
});

// Leave Queue
router.post('/leave', (req, res) => {
  res.send("Leave queue endpoint");
});

// View Current Queue
router.get('/view', (req, res) => {
  res.send("View queue endpoint");
});

module.exports = router;
