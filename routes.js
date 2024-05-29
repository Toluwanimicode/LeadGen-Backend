// backend/routes.js

const express = require('express');
const router = express.Router();

// Define route handler for the root URL
router.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

// Define route handler for POST /subscribe
router.post('/subscribe', (req, res) => {
  // Handle the POST request to /subscribe endpoint
  // Access the email address sent in the request body
  const { email } = req.body;

  // Example: Save the email address to the database
  // Replace this with your actual logic to save the email address

  // Send a response back to the client
  res.status(200).json({ message: 'Subscriber added successfully', email });
});

module.exports = router;


