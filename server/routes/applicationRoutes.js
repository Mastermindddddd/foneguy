const express = require('express');
const router = express.Router();

// Import Application model safely
let Application;
try {
  Application = require('../models/Application');
} catch (error) {
  console.error('Error loading Application model:', error);
}

// Middleware to ensure CORS headers on all routes
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  next();
});

// Handle preflight requests for this router
router.options('*', (req, res) => {
  res.sendStatus(200);
});

// POST /api/applications - Use explicit route path
router.post('/', async (req, res) => {
  try {
    if (!Application) {
      return res.status(500).json({ error: 'Application model not available' });
    }
    
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application saved successfully!' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Failed to save application' });
  }
});

// GET /api/applications - Use explicit route path
router.get('/', async (req, res) => {
  try {
    if (!Application) {
      return res.status(500).json({ error: 'Application model not available' });
    }
    
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

module.exports = router;