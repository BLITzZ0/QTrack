const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['waiting', 'served', 'cancelled'],
    default: 'waiting',
  }
});

module.exports = mongoose.model('Queue', queueSchema);
