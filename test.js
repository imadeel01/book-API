const mongoose = require('mongoose');

const uri = 'mongodb+srv://Admin000:YourPassword@book-api.2j32l5u.mongodb.net/bookdb';

mongoose.connect(uri, { family: 4 })
    .then(() => {
        console.log('✅ Connected!');
        process.exit(0);
    })
    .catch((err) => {
        console.log('❌ Error:', err.message);
        process.exit(1);
    });