import react from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css";

    function Navbar() {
        //função de zerar o token
        const [token, setToken] = useLocalStorage('token');
        let navigate = useNavigate();
        
        //chama a função de token vazio
        function goLogout(){
            setToken('')
            alert("Usuário deslogado")
           navigate('/login')
        }
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#7e1f1f" }}>
                <Toolbar variant="dense">
                <Link to='/home' className='text-decorator-none'>
                    <Box style={{ cursor: "pointer" }}>
                            <Typography variant="h5" color="inherit">
                                BlogPessoal
                            </Typography>
                    </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">

                        <Box mx={1} style={{ cursor: "pointer" }}  marginLeft={75}>
                            <Typography style={{ color: "White" }}>
                                CRIAR POSTAGEM
                            </Typography>
                        </Box>
                        <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography color="inherit">
                                POSTAGENS
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography color="inherit">
                                CRIAR TEMA
                            </Typography>
                        </Box>
                        </Link>
                            <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                                <Typography color="inherit">
                                    SAIR
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar >
        </>
    )
}

export default Navbar;