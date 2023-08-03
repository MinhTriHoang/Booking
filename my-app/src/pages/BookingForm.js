import React, { useState } from 'react';
import { createBooking } from '../utils/api'; 
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', hotel: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    console.log("Submitting booking:", formData); // Log the form data being sent
  
    try {
      const response = await createBooking(formData);
      console.log('Booking created:', response);
    } catch (error) {
      console.error('An error occurred while creating the booking:', error);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="text" name="hotel" placeholder="Hotel Name" onChange={handleChange} required />
      <input type="date" name="date" placeholder="Booking Date" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
