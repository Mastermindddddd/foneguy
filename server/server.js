require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicationRoutes = require('./routes/applicationRoutes');
const app = express();

// Custom CORS Middleware to handle preflight
app.use((req, res, next) => {
  const allowedOrigin = 'https://foneguy.co.za';
  const allowedMethods = 'GET, POST, PUT, DELETE, OPTIONS';
  const allowedHeaders = 'Content-Type, Authorization';

  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', allowedMethods);
  res.header('Access-Control-Allow-Headers', allowedHeaders);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // No Content
  }

  next();
});

const applicationRoutes = require('./routes/applicationRoutes');

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'foneguy API Server Running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/applications', applicationRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
