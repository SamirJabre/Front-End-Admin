import React from 'react'
import './login.css'

function login() {
    return (
        <div className="login-container">
          <h2>Admin Panel Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      )
}

export default login