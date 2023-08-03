import React, { useState, useEffect } from 'react';
import './PastBooking.css'
const PastBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch past bookings from backend
    fetch('http://localhost:5000/api/past-bookings')
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setBookings(data); // Update state with retrieved bookings
        } else {
          console.error('Unexpected response data:', data);
        }
      })
      .catch((error) => {
        // Handle error here
        console.error('Error fetching past bookings:', error);
      });
  }, []);

  return (
    <div>
      <h1>Past Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking._id}>
          <h2>{booking.hotel}</h2>
          <p>Name: {booking.name}</p>
          <p>Date: {booking.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PastBookings;
