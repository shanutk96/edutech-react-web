import React from 'react'
import logo from '../../assets/img/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    const nav_items = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/services',
            display: 'Services'
        },
        {
            path: '/courses',
            display: 'Courses'
        },
        {
            path: '/aboutus',
            display: 'About Us'
        }


    ]


    return (
        <header className='header'>
            <div className="container">
                <div className="nav_container">
                    <div className="logo">
                        <div className="logo-img">
                            <Link to='/'><img src={logo} alt='logo'></img> </Link>
                        </div>
                        <h2>EduTech AI</h2>
                    </div>

                    <div className="navigation">
                        <ul className='menu'>
                            {
                                nav_items.map((item) => (

                                    <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
                                ))
                            }
                            <li></li>
                        </ul>



                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header