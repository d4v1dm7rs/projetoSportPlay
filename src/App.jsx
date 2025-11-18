import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './componentes/layout/header'
import Footer from './componentes/layout/Footer'
import Navbar from './componentes/layout/Navbar'
import Home from './componentes/layout/Home'

function App() {

  return (
    <>
      <div className="App">
        <Header/>
        <Navbar/>
        <Home/>
        <Footer/>  
      </div>
    </>
  )
}

export default App
