import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/LoginPage/login';
import Dashboard from './pages/DashboardPage/dashboard';
import { useState } from 'react';


function App() {
  const [adminInfo,setAdminInfo] = useState({})
  return (
    <BrowserRouter>
      <Routes>  
        <Route index element={<Login setAdminInfo={setAdminInfo}/>} />
        <Route path="/dashboard" element={<Dashboard adminInfo={adminInfo}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
