require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const applicationRoutes = require('./routes/applicationRoutes');

const app = express();

app.get('/', (req, res) => {
  res.send('foneguy API Server Running');
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // To handle Base64 images
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/applications', applicationRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
