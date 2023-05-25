import react from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';

    function Navbar() {
        //função de zerar o token
        const token = useSelector<UserState, UserState["tokens"]>(
            (state) => state.tokens
          );
          
        let navigate = useNavigate();

        const dispatch = useDispatch();
        
        //chama a função de token vazio
        function goLogout(){
            dispatch(addToken(''));
            alert("Usuário deslogado")
            navigate('/login')
        }
        
        let navbarComponent;

        //se token não for vazio
        if(token != ""){
            navbarComponent = <AppBar position="static" style={{ backgroundColor: "#7e1f1f" }}>
            <Toolbar variant="dense">
            <Link to='/home' className='text-decorator-none'>
                <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                </Box>
                </Link>

                <Box display="flex" justifyContent="start">
                <Link to="/formularioPostagem" className="text-decorator-none">
                    <Box mx={1} style={{ cursor: "pointer" }}  marginLeft={75}>
                        <Typography style={{ color: "White" }}>
                            CRIAR POSTAGEM
                        </Typography>
                    </Box>
                    </Link>
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
        }
return (
    <>
        {navbarComponent}
    </>
)
}

export default Navbar;