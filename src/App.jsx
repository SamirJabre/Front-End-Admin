import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/LoginPage/login';
import Dashboard from './pages/DashboardPage/dashboard';
import UsersPage from './pages/UsersPage/userpage';
import Trip from './pages/TripMakingPage/trip';
import Application from './pages/ApplicationsPage/application';
import Applicant from './pages/ApplicantPage/applicant';
import DriverAssign from './pages/DriverAssignPage/driverAssign';
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
        <Route path="/drivers-applications" element={<Application/>} />
        <Route path="/application" element={<Applicant/>} />
        <Route path="/assign-driver" element={<DriverAssign/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
