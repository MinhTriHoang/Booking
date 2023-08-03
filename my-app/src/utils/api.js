import axios from 'axios';

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/book', bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
