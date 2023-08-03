import React from 'react';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';

const Home = () => (
  <div>
    <Navbar />
    <h1>Welcome to Vacation Booking</h1>
    <BookingForm />
    // Add other home page content
  </div>
);

export default Home;
