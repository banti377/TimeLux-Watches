import { useState } from 'react'
import './App.css'
import Home from './Ui/pages/Home/Home'
import Women from './Ui/pages/Women/Women'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <Women /> */}
    </>
  )
}

export default App
