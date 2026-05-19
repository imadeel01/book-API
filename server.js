const express = require('express');
const bookRouters = require('./routers/books');

const app = express();
app.use(express.json());
app.use('/books', bookRouters);

app.listen(3000, () => {
    console.log('Server running on port 3000')
});