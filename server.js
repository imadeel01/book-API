require('dotenv').config(); //environment variables from .env file
console.log('MONGO_URI:', process.env.MONGO_URI); //to cehck if the environment variable is loaded correctly
const express = require('express');
const mongoose = require('mongoose'); //For connecting to MongoDB

const bookRoutes = require('./routes/books');
const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookdb', {
    family: 4
})
    .then(() => console.log('MongoDB is Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

//Where the server listens
app.listen(3000, () => console.log('Server running on port http://localhost:3000'));