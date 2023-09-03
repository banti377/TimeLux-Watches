import { useState } from 'react'
import './App.css'
import Home from './Ui/pages/Home/Home'
import Women from './Ui/pages/Women/Women'
import Men from './Ui/pages/Men/Men'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <Men /> */}
      {/* <Women /> */}
    </>
  )
}

export default App
