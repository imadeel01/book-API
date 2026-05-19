const express = require('express');
const bookRoutes = require('./routes/books');

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

app.listen(3000, () => console.log('Server running on port http://localhost:3000'));
