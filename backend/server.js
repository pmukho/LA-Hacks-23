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

const User = require('./models/user')
app.listen(3001, () => console.log('Server listening on port 3001: http://localhost:3001'));

// USER ENDPOINTS

// Create new user
app.post('/users/new', async (req, res) => {
    const dupUser = await User.findOne({ username: req.body.username });
    if (dupUser) {
        res.json({ 'error': 'Duplicate username exists.' })
        return;
    }
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });

    await user.save();

    res.json(user);
});

// Delete user
app.get('/users/delete:_id', async (req, res) => {
    const result = await User.findByIdAndDelete(req.params._id);

    res.json(result);
});

// Edit user information 
app.put('/users/edit/:_id', async (req, res) => {
    const user = await User.findById(req.params._id);

    user.username = req.body.username;
    user.password = req.body.password;

    user.save();

    res.json(user);
})

// Log in user account
app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        res.json({ 'error': 'That username doesn\'t exist'})
        return;
    }

    if (user.password === req.body.password) {
        res.json(user);
    } else {
        res.json({ 'error': 'Incorrect password' })
    }
});