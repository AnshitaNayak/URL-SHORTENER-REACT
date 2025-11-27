import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import ShortenUrlPage from './components/ShortenUrlPage';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './components/ErrorPage';

const AppRouter = () => {
    const hideHeaderFooter = location.pathname.startsWith("/s");
    return (
        <>
            {!hideHeaderFooter && <Navbar />}
            <Toaster position='bottom-center' />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path="/s/:url" element={<ShortenUrlPage />} />

                <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
                <Route path='/login' element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />

                <Route path='/dashboard' element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />

                <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<ErrorPage message="We can't seem to find the page you are looking for " />} />

            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    )
}

export default AppRouter;

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path='/:url' element={<ShortenUrlPage />} />
        </Routes>
    )
};