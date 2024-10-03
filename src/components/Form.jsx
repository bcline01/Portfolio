import React, { useEffect, useState } from 'react';
import '../styles/Form.css';
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "sG3cXjuX3";

function ContactForm() {
 
  // State to store input values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sparkError, setSparkError] = useState('');

  useEffect(() => {
    console.log(sparkError)
  }, [sparkError])
  // State to store error messages
  const [errors, setErrors] = useState({});
  
  // State to track submission status
  const [formStatus, setFormStatus] = useState('');

  // Formspark hook
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

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

    setErrors(formErrors);

    // If there are no errors, submit the form to Formspark
    if (Object.keys(formErrors).length === 0) {
      try {
        await submit({ fullName, email, message });
        setFormStatus('Form submitted successfully!');
        setFullName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        setSparkError(error)
        setFormStatus('Error submitting form. Please try again later.');
      }
    }
  };

  return (
    <form action="https://submit-form.com/sG3cXjuX3" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
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
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      </div>

      <button type="submit">Submit</button>
      {formStatus && <p>{formStatus}</p>}

    </form>
  );
}

export default ContactForm;
