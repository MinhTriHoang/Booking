const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('An error occurred while connecting to the database:', err);
  });
};  

module.exports = connectDB;
