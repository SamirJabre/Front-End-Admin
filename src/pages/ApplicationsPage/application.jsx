import React from 'react'
import NavBar from '../../components/NavBar/navbar'
import './application.css'
import ApplicationContent from '../../components/ApplicationContent/applicationContent'

function application() {
  return (
    <div className='applicationPage'>
    <NavBar/>
    <div className='applicationContainer'>
    <ApplicationContent/>
    <ApplicationContent/>
    <ApplicationContent/>
    <ApplicationContent/>
    <ApplicationContent/>
    </div>
    </div>
  )
}

export default application