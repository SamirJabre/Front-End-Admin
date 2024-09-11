import React from 'react'
import './applicationContent.css'
import {useNavigate} from 'react-router-dom'

function applicationContent() {
    let navigate = useNavigate();
  return (
    <div className='applicationContent' onClick={()=>{navigate('/application')}}>
            <img src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' id='driver_img'/>
            <div id='driver_info'>
            <h1 id='driver_name'>Name : Nabil</h1>
            <h1 id='driver_age'>Age : 30</h1>
            </div>
        </div>
  )
}

export default applicationContent