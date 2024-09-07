import { useState } from 'react'
import './login.css'
import axios from 'axios';



function login({setAdminInfo}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`${BASE_URL}/adminlogin`, {
            email: email,
            password: password,
          }).then((res) => {
            setAdminInfo(res.data)
            localStorage.setItem('token',res.data.token)
            console.log(res.data)
        });
          
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };

    return (
        <div className="login-container">
          <h2>Admin Panel Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
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