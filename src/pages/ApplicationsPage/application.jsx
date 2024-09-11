import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/navbar'
import './application.css'
import ApplicationContent from '../../components/ApplicationContent/applicationContent'
import axios from 'axios';

function application() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [applications,setApplications] = useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}/get-apps`)
    .then((res)=>
      setApplications(res.data))
  },[])
  return (
    <div className='applicationPage'>
    <NavBar/>
    <div className='applicationContainer'>
      {applications.map((application)=>{
        return <ApplicationContent key={application.id} application={application}/>
      })
      }
    </div>
    </div>
  )
}

export default application