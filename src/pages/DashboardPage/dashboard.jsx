import React from 'react'
import './dashboard.css'
import Navbar from '../../components/NavBar/navbar'

function dashboard() {
  return (
    <div className='container'>
      <Navbar />
      <div className="welcome-message">
          <h1>Welcome, Admin!</h1>
        </div>
    </div>
  )
}

export default dashboard