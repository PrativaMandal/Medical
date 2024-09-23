import React from 'react';
import './App.css';
import Home from './Page/Home';
import Footer from './Page/Footer';
import Service from './Page/Service';
import Contact from './Page/Contact';
import Doctor from './Page/Doctor';
import { Routes, Route } from 'react-router-dom';
import Header from './Page/Header';
import Navbar from './Page/Navbar';
import Appointment from './Page/Appointment';
import EmergencyBanner from './Page/EmergencyBanner';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/Service' element={<Service />} />
        <Route path='/Doctor' element={<Doctor />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    < Appointment/>
    < EmergencyBanner/>
    </>
  );
};

export default App;
