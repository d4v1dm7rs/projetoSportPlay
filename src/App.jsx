import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './componentes/layout/header'
import Footer from './componentes/layout/footer'
import Navbar from './componentes/layout/Navbar'
import Home from './componentes/layout/Home'
import Empresa from './componentes/paginas/Empresa'
import Contato from './componentes/paginas/Contato'

function App() {

  return (
    <>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
        <Footer/>  
      </div>
    </>
  )
}

export default App
