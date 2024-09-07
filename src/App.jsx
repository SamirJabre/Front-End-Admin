import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/LoginPage/login';

function App() {

  return (
    <BrowserRouter>
      <Routes>  
        <Route index element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
