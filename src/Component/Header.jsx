import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
<nav className='nav'>
    <Link to='/'className='link' ><li>Appointment</li></Link>
    <Link to='/patientDashboard'className='link' ><li>DashBoard</li></Link>


</nav>
       
    </div>
  )
}

export default Header