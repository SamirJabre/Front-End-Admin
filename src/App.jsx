import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>
      This is the home page
    </h1>
  )
}

export default App
