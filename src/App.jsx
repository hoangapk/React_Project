import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Todolist from './pages/todolist/Todolist'
import ClientRouter from './routers/ClientRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ClientRouter />
    </>
  )
}

export default App;
