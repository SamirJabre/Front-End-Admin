import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userpage.css';
import Navbar from '../../components/NavBar/navbar';

function userpage() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    
    axios.get(`${BASE_URL}/getAllUsers` , {
        headers: {
          'Authorization': `Bearer ${token}`
        } 
    })
      .then(response => {
        setUsers(response.data.users);
        console.log(response.data.users);
        
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const deleteUser = (userId) => {
    axios.delete(`${BASE_URL}/deleteuser/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  return (
    <div className="user-page-container">
    <Navbar/>
        {users.map(user => (
          <div className='userDiv' key={user.id}>
            {user.name} <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default userpage;