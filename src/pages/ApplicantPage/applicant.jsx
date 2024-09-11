import React from 'react'
import './applicant.css'
import NavBar from '../../components/NavBar/navbar'

function applicant() {
  return (
    <div className='applicantPageContainer'>
    <NavBar/>
    <div className='img_container'>
        <img src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' id='img_driver'/>
    </div>

    <div className='applicant_info'>
        <p id='info'>Name : Nabil</p>
        <p id='info'>Email : </p>
        <p id='info'>Age : 30</p>
        <p id='info'>Phone Number : </p>
        <p id='info' className='address'>Address : </p>
    </div>

    <div className='documents'>
    <img src='https://img.freepik.com/free-vector/hand-drawn-driving-license-template_23-2150020441.jpg?w=740&t=st=1726046425~exp=1726047025~hmac=8d3eefa42ccdbe6b17395c38fa70bd586587e1fbe31182841a685286051dd326' id='documents'/>
    <img src='https://img.freepik.com/free-vector/hand-drawn-driving-license-template_23-2150020441.jpg?w=740&t=st=1726046425~exp=1726047025~hmac=8d3eefa42ccdbe6b17395c38fa70bd586587e1fbe31182841a685286051dd326' id='documents'/>
    </div>

    <div className='btns'>
        <button id='accept'>Accept</button>
        <button id='reject'>Reject</button>
    </div>

    </div>
  )
}

export default applicant