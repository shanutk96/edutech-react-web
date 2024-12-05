import React, { useState } from 'react'
import './ContactUs.css'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

function ContactUs() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => { //e.target provides details about the element that caused the event.(etc value,name,id,type)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
     //[name] Dynamically sets or updates the key in the copied object using the value of name
    //[name] is not an array but a way to dynamically set object keys using the value of the name variable.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "support@edutech", // Replace with your EmailJS service ID
        "template_iy785pt", // Replace with your EmailJS template ID
        formData,           // data
        "znT2nOPMtBdFRj8et" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          //confimration box
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Your message has been successfully sent to the support team!',
            confirmButtonText: 'Okay'
          });

          setFormData({ name: "", email: "", message: "" }); // clearing form
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
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
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter your name"
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your email"
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          Message:

          <textarea
            name="message"
            placeholder="Type your message here"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs