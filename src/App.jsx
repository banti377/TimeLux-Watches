import { useState } from 'react'
import './App.css'
import Home from './Ui/pages/Home/Home'
import Women from './Ui/pages/Women/Women'
import Men from './Ui/pages/Men/Men'
import Kids from './Ui/pages/Kids/Kids'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <Men /> */}
      {/* <Women /> */}
      {/* <Kids /> */}
    </>
  )
}

export default App
