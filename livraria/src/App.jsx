import { useState } from 'react'
import './App.css'
import Home from './paginas/Home'
import Produtos from './paginas/Produtos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <Produtos/>
    </div>
  )
}

export default App
