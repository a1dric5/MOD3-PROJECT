// const express = require('express');
// require('dotenv').config(); 
// const app = express();
// const cors = require('cors');

// const PORT = process.env.PORT || 3000;
 
// // Middleware
// app.use(cors());
// app.use(express.json());
// require("./configuration/database.js")

// const Contact = require('./models/contacts.js');

// // Connect to MongoDB
// // connectDB()
  
// // Routes
// app.post('/contact', async (req, res) => {
//   try {
//     // const { name, email, message } = req.body;
//     const data = await req.body
//     // const newContact = new Contact({ name, email, message });
//     // await newContact.save();

//     const contactmade = await Contact.create(data)

//     res.json(contactmade);
//   } catch (error) {
//     console.error('Error submitting contact form', error);
//     res.status(500).json({ message: 'An error occurred while submitting the contact form' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


/////////////////////////

const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const Contact = require('./models/contacts');

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
require('./configuration/database');

// Routes
app.post('/contact', async (req, res) => {
  console.log("hitting contact route");
  try {
    console.log(req.body);
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json(newContact);
  } catch (error) {
    console.error('Error submitting contact form', error);
    res.status(500).json({ message: 'An error occurred while submitting the contact form' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
