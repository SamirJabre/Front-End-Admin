import React from 'react'
import './dashboard.css'
import Navbar from '../../components/NavBar/navbar'

function dashboard({adminInfo}) {
  const name = adminInfo.admin.name
  return (
    <div className='container'>
      <Navbar />
      <div className="welcome-message">
          <h1>Welcome, {name}!</h1>
        </div>
    </div>
  )
}

export default dashboard