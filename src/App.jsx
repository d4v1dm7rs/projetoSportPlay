import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './componentes/layout/header'
import Footer from './componentes/layout/footer'
import Navbar from './componentes/layout/Navbar'

function App() {

  return (
    <>
      <div className="App">
        <Header/>
        <Navbar/>
        <Footer/>  
      </div>
    </>
  )
}

export default App
