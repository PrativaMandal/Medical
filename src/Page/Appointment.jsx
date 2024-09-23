import React from 'react'
import '../css/Appointment.css'


const Appointment = () => {
  return (
    <>
    <div className='appointment'>
        <div className='appointment-header'>
            <h1>MAKE AN APPOINTMENT</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className='appointment-from'> 

            <div className='appointment-from1'>
                <input type="text" placeholder='You Name' />
                <input type="text" placeholder='You email' />
                <input type="text" placeholder='You Phone' />
                <input type="text" placeholder='You dd/mm/yy' />
                <input type="text" placeholder='Select Department' />
                <input type="text" placeholder='Select Doctor' />

            </div>
            <textarea placeholder='Message(optional)'></textarea>
            <button>Make an Appointment</button>

        </div>
    </div>
      
    </>
  )
}

export default Appointment
