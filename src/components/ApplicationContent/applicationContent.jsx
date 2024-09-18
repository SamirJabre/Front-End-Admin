import React, { useEffect, useState } from 'react'
import './applicationContent.css'
import {useNavigate} from 'react-router-dom'

function applicationContent({application}) {
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [profilePic,setProfilePic] = useState('')
  useEffect(()=>{
    setName(application.name)
    setAge(application.age)
    setProfilePic(application.profile_picture)
  },[profilePic])
  
    let navigate = useNavigate();
  return (
    <div className='applicationContent' onClick={()=>{navigate('/application', { state: { application } })}}>
            <img src={profilePic} id='driver_img'/>
            <div id='driver_info'>
            <h1 id='driver_name'>Name : {name}</h1>
            <h1 id='driver_age'>Age : {age}</h1>
            </div>
        </div>
  )
}

export default applicationContent