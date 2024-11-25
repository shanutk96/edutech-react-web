import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Pages/Home/Home'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import AboutUs from '../components/AboutUs/AboutUs'
import ContactUs from '../components/ContactUs/ContactUs'

function LayoutRoutes() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Plans/>} />
                <Route path='/courses' element={<Courses/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                <Route path='/contactus' element={<ContactUs/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default LayoutRoutes