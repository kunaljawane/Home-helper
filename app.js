const express = require('express');
const mongoose = require('mongoose');
const Registration = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/registration-form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.redirect('/success.html');
  } catch (err) {
    console.error(err);
    res.redirect('/error.html');
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
