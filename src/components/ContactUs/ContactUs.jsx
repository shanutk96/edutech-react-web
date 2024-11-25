import React from 'react'
import './ContactUs.css'

function ContactUs() {

    const handleSubmit = () => {
      window.alert("Form submitted:");

      };
    

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">
          Name:
          <input
            type="text"
            name="name"
            // value={formData.name}
            // // onChange={handleChange}
            placeholder="Enter your name"
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          Email:
          <input
            type="email"
            name="email"
            // value={formData.email}
            // // onChange={handleChange}
            placeholder="Enter your email"
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          Message:
          <textarea
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            placeholder="Type your message here"
            className="contact-textarea"
          />
        </label>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUs