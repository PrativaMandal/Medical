import React from 'react'
import '../css/EmergencyBanner.css'

const EmergencyBanner = () => {
  return (
    <>
      
      <div className='emergencybanner'>
        <div className='emergencybanner-header'>
            <h1>In an emergency? Need help now?</h1>
            <div className='emergencybanner-pragraph'> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
           
            <button>Make an Appointment</button>
        </div>
      </div>
    </>
  )
}

export default EmergencyBanner
