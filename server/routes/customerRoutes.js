const express = require('express');
const router = express.Router();

// Check Status
router.get('/status', (req, res) => {
  res.send("Customer status endpoint");
});

// Book Slot
router.post('/book', (req, res) => {
  res.send("Book slot endpoint");
});

module.exports = router;
