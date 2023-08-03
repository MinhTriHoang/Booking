const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const pathToBuild = path.join(__dirname, 'my-app/src');
app.use(express.static(pathToBuild));

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://hoang45:<minhtri123234>@cluster0.npmzojg.mongodb.net/?retryWrites=true&w=majority';
const corsOptions = {
  origin: '*', 
};

app.get('*', (req, res) => {
  res.sendFile(path.join(pathToBuild, 'index.html'));
});

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
