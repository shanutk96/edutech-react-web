import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Pages/Home/Home'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import AboutUs from '../components/AboutUs/AboutUs'
import ContactUs from '../components/ContactUs/ContactUs'
import Purchase from '../components/Purchase/Purchase'
import Payment from '../components/Payment/Payment'


function LayoutRoutes() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/edutech-react-web' element={<Home />} />
                <Route path='/services' element={<Plans/>} />
                <Route path='/courses' element={<Courses/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                <Route path='/contactus' element={<ContactUs/>} />
                <Route path='/purchase' element={<Purchase/>} />
                <Route path='/payment' element={<Payment/>} />

            </Routes>
            <Footer/>
        </Router>
    )
}

export default LayoutRoutes