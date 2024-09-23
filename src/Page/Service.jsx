import React from 'react'
import '../css/Service.css'
import { FaHeartPulse } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { FaDna } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa6";

const Service = () => {
  return (
    <>
      <div className='srevice' >
        <div className='product'>
            <h1>Services</h1>
           
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='product-card'>
            <div className='product-box'>
                <div className='box-icon'><FaHeartPulse className='icon' /></div>
          
             <h1>Nesciunt Mete</h1>
           
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>
            <div className='product-box'>
            <div className='box-icon'><FaPills  className='icon' /></div>
             <h1>Eosle Commodi</h1>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>
            <div className='product-box'>
            <div className='box-icon'><FaHospitalUser  className='icon' /></div>
             <h1>Ledo Markt</h1>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>

            <div className='product-box'>
            <div className='box-icon'><FaDna  className='icon' /></div>
             <h1>Asperiores Commodit</h1>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>

            <div className='product-box'>
            <div className='box-icon'><FaWheelchair   className='icon' /></div>
             <h1>Dolori Architecto</h1>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>
            <div className='product-box'>
            <div className='box-icon'><FaNotesMedical  className='icon' /></div>
             <h1>Velit Doloremque</h1>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>


            
            
        </div>
      </div>





      
    </>
  )
}

export default Service
