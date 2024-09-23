import React from 'react'
import '../css/Contact.css'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

const Contact = () => {
  return (
    <>
      <div className='contact'>
      <div className='contact-page'>
        <h1>Contact</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
 <div className='map'>
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d98729.16414026101!2d85.2970397164619!3d27.76536021821328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!4m0!4m4!1s0x6cc25ca1a9ce6d87%3A0xa41a0b9fc0924336!3m2!1d28.397454999999997!2d84.1301506!5e0!3m2!1sen!2snp!4v1726743494016!5m2!1sen!2snp"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  
/>
</div>


<div className='contact-section'>
 

  <div className=' contact-card'>

    <div className='contact-box'>
    <div className='icon-box1'> <SlLocationPin  className='icon1'/></div>
      <h1>Address</h1>
    <p>A108 Adam Street, New York, NY 535022</p>
    </div>
    
  
  <div className='contact-box1'>
    <div className='icon-box2' ><BsTelephone  className='icon1'/></div>
    <h1>Call Us</h1>
  <p>+1 5589 55488 55</p>
  </div>

  <div className='contact-box1'>
    <div className='icon-box2'><PiEnvelopeSimpleLight className='icon1' /></div>
    <h1>Email Us</h1>
  <p>info@example.com</p>
  </div>

  </div>


  <div className='contact-from'>
    <div className='nameemai'>
    <input type="text" placeholder=' You Name' />
    <input type="text" placeholder=' You Emai'/>
    </div>
    
    <input type="Subject" placeholder=' Subjecti'/>
    <textarea placeholder='Your Message'></textarea>
    <button>Send Message</button>

  </div>


</div>


</div>

    </>
  )
}

export default Contact
