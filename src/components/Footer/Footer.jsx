import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>

            <div className="container">
                <div className="footer_wrapper">

                    <div className="footer-box">

                        <div className="log">
                            <div className="logo-img">
                                <img src={footer} alt=''></img>
                            </div>
                            <h2>EduTech AI</h2>
                        </div>
                        <p>
                            Comprehensive learning programs & classes for all students
                        </p>

                    </div>

                    <div className="footer-box">
                        <h4 className='footer_title'>Company</h4>
                            <ul className='footer_links'>
                                <li><Link to='/courses'><a href=''>Our Programs</a></Link></li>
                                <li><Link to='/services'><a href=''>Our Plan</a></Link></li>
                                <li><Link to='/courses'><a href=''>Become a member</a></Link></li>

                            </ul>

                    </div>

                    <div className="footer-box">
                    <h4 className='footer_title'>Quick links</h4>
                            <ul className='footer_links'>
                                <li><Link to='/aboutus'>Abouts Us</Link></li>
                                <li><Link to='/contactus'>Support</Link></li>

                            </ul>

                    </div>


                </div>
            </div>

        </footer>
    )
}

export default Footer