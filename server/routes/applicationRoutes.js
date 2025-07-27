const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST /api/applications
router.post('/', async (req, res) => {
  try {
    // Before saving to the database
    req.body.paymentDeclaration = req.body.paymentDeclaration === "on";

    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application saved successfully!' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Failed to save application' });
  }
});

module.exports = router;
