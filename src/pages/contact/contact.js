// import React from 'react';
// import './contact.css';
// import axios from 'axios';

// const ContactPage = () => {

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>
//         We would love to hear from you! Please fill out the form below or reach out to us using the contact information provided.
//       </p>
//       <form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" placeholder="Your Name" />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Your Email" />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Your Message"></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Contact Information</h2>
//         <p>
//           Phone: <a href="tel:1234567890">123-456-7890</a>
//         </p>
//         <p>
//           Email: <a href="mailto:info@example.com">PathPLUS@gmail.com</a>
//         </p>
//         <p>
//           Address: 123 Education Street, Seattle, Washington,
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

////////////////////!SECTION

import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const handlenameChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleemailChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.email]: e.target.value,
  //   });
  // };

  // const handlemessageChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.message]: e.target.value,
  //   });
  // };

  const handlenameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  
  const handleemailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  
  const handlemessageChange = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/contact', formData)
      .then((response) => {
        console.log('Form submitted successfully');
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form', error);
      });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below or reach out to us using the contact information provided.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handlenameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleemailChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handlemessageChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Contact Information</h2>
        <p>Phone: <a href="tel:1234567890">123-456-7890</a></p>
        <p>Email: <a href="mailto:info@example.com">PathPLUS@gmail.com</a></p>
        <p>Address: 123 Education Street, Seattle, Washington</p>
      </div>
    </div>
  );
};

export default ContactPage;

