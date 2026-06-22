require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/books');
const app = express();

app.use(express.json());
app.use('/books', bookRoutes);

mongoose.connect('mongodb://localhost:27017/bookdb', {
    family: 4
})
    .then(() => console.log('MongoDB is Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.listen(3000, () => console.log('Server running on port http://localhost:3000'));