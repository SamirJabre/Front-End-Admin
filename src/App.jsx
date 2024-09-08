import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/LoginPage/login';
import Dashboard from './pages/DashboardPage/dashboard';
import UsersPage from './pages/UsersPage/userpage';
import Trip from './pages/TripMakingPage/trip';
import { useState } from 'react';


function App() {
  const [adminInfo,setAdminInfo] = useState({})
  return (
    <BrowserRouter>
      <Routes>  
        <Route index element={<Login setAdminInfo={setAdminInfo}/>} />
        <Route path="/dashboard" element={<Dashboard adminInfo={adminInfo}/>} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/make-trip" element={<Trip/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
