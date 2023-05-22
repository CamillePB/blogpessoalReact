import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/tema/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <div style={{minHeight: '100vh'}}> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
          {/* </div> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
