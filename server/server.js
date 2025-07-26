require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicationRoutes = require('./routes/applicationRoutes');
const app = express();

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === 'production'
    ? 'https://foneguy.co.za'
    : '*';

app.use(
  cors({
    origin: "*",
  })
);

// Handle preflight OPTIONS requests globally
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  return res.sendStatus(200);
});

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
  console.log('CORS origin:', ALLOWED_ORIGIN);
});

module.exports = app;
