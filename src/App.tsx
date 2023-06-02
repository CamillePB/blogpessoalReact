import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/tema/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
import CadastroPostagem from './components/postagens/cadastropostagem/CadastroPostagem'
import CadastroTema from './components/tema/cadastrotema/CadastroTema'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import store from './store/Store'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { themeOptions } from './themes/ThemeOptions'
import { ThemeProvider } from '@mui/material'

function App() {
  const THEME = createTheme({
    palette: {
      primary: {
        light: '#fff',
        main: '#00bcd4',
        dark: '#008394',
        contrastText: '#fff',
      },
      secondary: {
        light: '#637bfe',
        main: '#6625ff',
        dark: '#2a3eb1',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
          {/* <ThemeProvider theme={themeOptions}> */}
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            {/* </ThemeProvider> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </Provider>
      </MuiThemeProvider>
</>
  )
}

export default App
