import React from 'react'
import './login.css'
import { BASE_URL } from '@env';

function login({setAdminInfo}) {

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleLogin = async () => {
    await
    }

    return (
        <div className="login-container">
          <h2>Admin Panel Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" id="email" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      )
}

export default login