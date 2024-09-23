import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <>
       <nav className='navbar'>
        <div className='log'>
            <h1>M<span>EDICIO</span></h1>
            </div>
        <div className='list'>
            <ul>
                <li>HOME</li>
                <li>ABOUTS</li>
                <li>SERVICES</li>
                <li>DRPARTMENTS</li>
                <li>DOCTORS</li>
                <li>DROPDOWN</li>
                <li>CONTACT</li>
                </ul>
                </div>
             
                   <div className='nav-btn'>
                     <button>Make an appoinments</button>
                     </div>
               
   
        </nav>
    </>
  )
}

Navbar.propTypes = {

}

export default Navbar
