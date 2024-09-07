import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/LoginPage/login';


function App() {
  const [adminInfo,setAdminInfo] = useState({})
  return (
    <BrowserRouter>
      <Routes>  
        <Route index element={<Login setAdminInfo={setAdminInfo}/>} />
        <Route path='/register' element={<RegisterPage setUserInfo={setUserInfo}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
