const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  tokenNumber: {
    type: Number,
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  issuedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  issuedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'skipped'],
    default: 'active',
  }
});

module.exports = mongoose.model('Token', tokenSchema);
