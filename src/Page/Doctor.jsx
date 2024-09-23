import React from 'react'
import '../css/Doctor.css'

const Doctor = () => {
  return (
    <>

    <div className='doctor-container'>
        <div className='doctor-header'>
            <h1>Doctors</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='doctor-card'>
            <div className='doctor-box'> 
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-1.jpg" alt="" />
                <h1>Walter White</h1>
                <p>Chief Medical Officer</p>
            </div>
            <div className='doctor-box'> 
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-2.jpg" alt="" />
                <h1>Sarah Jhonson</h1>
                <p>Anesthesiologist</p>
            </div>
            <div className='doctor-box'> 
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-1.jpg" alt="" />
                <h1>Walter White</h1>
                <p>Chief Medical Officer</p>
            </div>
            <div className='doctor-box'> 
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-4.jpg" alt="" />
                <h1>Amanda Jepson</h1>
                <p>Neurosurgeon</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Doctor
