import React, { useEffect, useState } from 'react'
import './trip.css'
import NavBar from '../../components/NavBar/navbar'
import axios from 'axios';

function trip() {

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [arrivalTime, setArrivalTime] = useState('')
    const [price, setPrice] = useState('')
    const [bus, setBus] = useState('')
    const [locations, setLocations] = useState([]);

    useEffect(()=>{
      axios.get(`${BASE_URL}/getcities`)
      .then((response)=>{
        setLocations(response.data.cities);
      })
    },[])

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`${BASE_URL}/createtrip`, {
        from: from,
        to: to,
        date: date,
        departure_time: departureTime,
        arrival_time: arrivalTime,
        price: price,
        bus_id: bus
      })
      .then((response)=>{
        console.log(response.data)
      })
    }


  return (
    <div className='trip-container'>
    <NavBar/>

    <h1>Make a Trip</h1>
    <form className='trip-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='from'>From:</label>
          <select
            id='from'
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value=''>Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.city}>
                {location.city}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='to'>To:</label>
          <select
            id='to'
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value=''>Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.city}>
                {location.city}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='departureTime'>Departure Time:</label>
          <input
            type='time'
            id='departureTime'
            value={departureTime}
            onChange={(e) => {setDepartureTime(e.target.value); console.log(departureTime)}}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='arrivalTime'>Arrival Time:</label>
          <input
            type='time'
            id='arrivalTime'
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='bus'>Assign to Bus #:</label>
          <input
            type='text'
            id='bus'
            value={bus}
            onChange={(e) => setBus(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default trip