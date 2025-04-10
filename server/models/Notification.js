const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // in case it's system generated
  },
  type: {
    type: String,
    enum: ['email', 'sms', 'push'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['sent', 'failed', 'pending'],
    default: 'pending',
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  service: {
    type: String,
    default: 'N/A', // e.g., Twilio, Firebase
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
