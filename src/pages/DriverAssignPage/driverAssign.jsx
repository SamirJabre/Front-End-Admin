import React, { useEffect, useState } from 'react'
import './driverAssign.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

function driverAssign() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [buses, setBuses] = useState([])
  const [bus, setBus] = useState('')

  const [drivers, setDrivers] = useState([])
  const [driver, setDriver] = useState('')

  useEffect(()=>{
    axios.get(`${BASE_URL}/buses`)
    .then((response)=>{
      setBuses(response.data.buses);
    })

    axios.get(`${BASE_URL}/drivers`)
    .then((response)=>{
      setDrivers(response.data);
    })
  },[])

  const HandleAssigning = async () => {
    axios.post(`${BASE_URL}/assign`, {
      bus_id: bus,
      driver_id: driver
    })
  }


  return (
    <div className='container'>
    <Navbar/>

    <div className='assignation'>
          <div className='choose_bus'>
          <label>Bus #:</label>
          <select
            id='bus'
            value={bus}
            onChange={(e) => setBus(e.target.value)}
          >
            <option value=''>Select a Bus</option>
            {buses.map(bus => (
              <option key={bus.id} value={bus.id}>
                {bus.bus_number}
              </option>
            ))}
          </select>
          </div>


          <div className='choose_bus'>
          <label>Driver:</label>
          <select
            id='bus'
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
          >
            <option value=''>Select a Driver</option>
            {drivers.map(driver => (
              <option key={driver.id} value={driver.id}>
                {driver.id} : {driver.name}
              </option>
            ))}
          </select>
          </div>
          <button className='assign-button' onClick={HandleAssigning}>Assign</button>
      </div>

    </div>
  )
}

export default driverAssign