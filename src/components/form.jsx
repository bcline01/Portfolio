import React, { useState } from 'react';
import '../styles/Form.css';

function ContactForm() {
  // State to store input values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State to store error messages
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    let formErrors = {};

    // Validate full name
    if (!fullName) {
      formErrors.fullName = 'Full Name is required!';
    }

    // Validate email
    if (!email) {
      formErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid.';
    }

    // Validate message
    if (!message) {
      formErrors.message = 'Message is required.';
    }

    // Update state with errors
    setErrors(formErrors);

    // Check if form has no errors before submitting
    // Object.keys returns an array of a given object's own enumerable property names (i.e., keys), in the same order as we get with a normal loop
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully!', { fullName, email, message });
      // You can add further logic here to handle the form data (e.g., send it to a server)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
