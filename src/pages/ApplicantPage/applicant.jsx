import React, { useEffect } from 'react'
import './applicant.css'
import NavBar from '../../components/NavBar/navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function applicant() {
  let navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const location = useLocation();
  const { application } = location.state || {};


  console.log(application);
  
  const handleApprove = async () => {
    try{
      await axios.post(`${BASE_URL}/approve-app`, {
        id: application.id,
        name: application.name,
        email: application.email,
        password: application.password,
        phone_number: application.phone_number,
        age: application.age,
        profile_picture: application.profile_picture,
        address: application.address,
        id_photo: application.id_photo,
        driver_license: application.driver_license,
        })
        .then((res) => navigate('/drivers-applications') )
    }
    catch (error) {
      console.error('Error approving application:', error);
    }
  }

  const handleReject = async () => {
    try{
      await axios.post(`${BASE_URL}/reject-app`, {
        id: application.id,
        })
        .then((res) => navigate('/drivers-applications') )
    }
    catch (error) {
      console.error('Error rejectiono application:', error);
    }
  }
  


  return (
    <div className='applicantPageContainer'>
    <NavBar/>
    <div className='img_container'>
        <img src={application.profile_picture} id='img_driver'/>
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
        <button id='reject' onClick={handleReject}>Reject</button>
        <button id='accept' onClick={handleApprove}>Accept</button>
    </div>

    </div>
  )
}

export default applicant