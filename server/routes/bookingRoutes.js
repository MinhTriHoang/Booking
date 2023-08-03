const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Route to book a hotel
router.post('/book', async (req, res) => {
    console.log("Booking Request:", req.body); // Log the incoming request

    const { name, hotel, date } = req.body;
  
    try {
      const newBooking = new Booking({ name, hotel, date });
      await newBooking.save();
      res.status(200).json(newBooking);
    } catch (error) {
      console.error("Error in booking:", error); // Log the error
      res.status(400).json({ message: 'Error booking the hotel', error });
    }
});

// Route to retrieve past bookings
router.get('/past-bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching past bookings', error });
  }
});

module.exports = router;
