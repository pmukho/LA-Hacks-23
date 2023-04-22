require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

app.listen(3001, () => console.log('Server listening on port 3001: http://localhost:3001'));