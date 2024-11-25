import React from 'react'
import edutech from '../../assets/img/edutech.png'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={edutech} alt="Our Team" className="image" />
      </div>
      <div className="about-us-text">
        <h1 className="title">About Us</h1>
        <p className="text">
          Welcome to our website! We are a passionate team dedicated to providing the best
          educational experiences through cutting-edge technology. Our mission is to empower
          learners and educators with innovative tools that inspire growth and success.
        </p>
        <p className="text">
          Thank you for visiting us. Together, we shape the future of education.
        </p>
        <p className="text">Any enquiries? Write to us @ support@edutech.ai</p>
      </div>
      <div className="image-container">
      <img src={edutech} alt="Rectangle" className="imagelast"
      />
    </div>
    </div>
    
    </>
  )
}

export default AboutUs