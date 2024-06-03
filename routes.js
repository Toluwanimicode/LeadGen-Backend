const express = require('express');
const router = express.Router();
const Subscriber = require('./models/Subscriber'); // Import the Subscriber model

// Define route handler for the root URL
router.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

// Define route handler for POST /subscribe
router.post('/subscribe', async (req, res) => {
  const { email } = req.body; // Extract email from request body
  console.log('Received subscription request for email:', email); // Log for debugging

  try {
    // Save the email address to the database
    const newSubscriber = new Subscriber({ email }); // Create a new Subscriber instance
    await newSubscriber.save(); // Save the instance to the database
    console.log('Subscriber added successfully:', email); // Log success

    // Send a response back to the client
    res.status(200).json({ message: 'Subscriber added successfully', email });
  } catch (error) {
    console.error('Error adding subscriber:', error); // Log error

    // Handle duplicate email error
    if (error.code === 11000) { // MongoDB duplicate key error code
      res.status(400).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }
});

module.exports = router;




