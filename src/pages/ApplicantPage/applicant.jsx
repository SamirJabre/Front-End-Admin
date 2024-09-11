import React, { useEffect } from 'react'
import './applicant.css'
import NavBar from '../../components/NavBar/navbar'
import { useLocation } from 'react-router-dom';


function applicant() {

  const location = useLocation();
  const { application } = location.state || {};


  console.log(application);
  

  return (
    <div className='applicantPageContainer'>
    <NavBar/>
    <div className='img_container'>
        <img src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' id='img_driver'/>
    </div>

    <div className='applicant_info'>
        <p id='info'>Name : {application.name}</p>
        <p id='info'>Email : {application.email}</p>
        <p id='info'>Age : 30</p>
        <p id='info'>Phone Number : {application.phone_number}</p>
        <p id='info' className='address'>Address : {application.address}</p>
    </div>

    <div className='documents'>
    <img src={application.driver_license} id='documents'/>
    <img src={application.id_photo} id='documents'/>
    </div>

    <div className='btns'>
        <button id='reject'>Reject</button>
        <button id='accept'>Accept</button>
    </div>

    </div>
  )
}

export default applicant