const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Connection URL
const url = 'mongodb://localhost/hehe';
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your React app's URL
};

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));




app.use(cors(corsOptions));
app.use(bodyParser.json());

// Import routes
const bookingRoutes = require('./server/routes/bookingRoutes');

// Use routes
app.use('/api', bookingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
