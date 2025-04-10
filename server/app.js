const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
//const userRoutes = require('./routes/userRoutes');
//app.use('/api/users', userRoutes);

module.exports = app;
