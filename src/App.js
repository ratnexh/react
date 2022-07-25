import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
  }
  return (
    <>
      <Navbar brandtext="LOGO." mode={mode} toggleMode={toggleMode} />
      <Textform mode={mode} />
    </>
  )
}

export default App;
