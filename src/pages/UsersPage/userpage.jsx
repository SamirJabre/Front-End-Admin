import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userpage.css';

function userpage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    axios.get(`${BASE_URL}/getusers`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const deleteUser = (userId) => {
    // Delete user by ID
    axios.delete(`${BASEURL}/${userId}`)
      .then(() => {
        // Update the state to remove the deleted user
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  return (
    <div className="user-page">
      <h1>User Page</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default userpage;