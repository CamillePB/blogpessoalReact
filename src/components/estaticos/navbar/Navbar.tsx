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
import { toast } from 'react-toastify';

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
            toast.info('Usuário deslogado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate('/login')
        }
        
        let navbarComponent;

        //se token não for vazio
        if(token != ""){
            navbarComponent = <AppBar position="fixed" style={{ background: 'linear-gradient(1deg, #191919 10%, #00121a 100%)'}}>
            <Toolbar variant="dense">
            <Link to='/home' className='text-decorator-none'>
                <Box style={{ cursor: "pointer", display:'flex' }} gap={1}>
                <img className="logo_principal" src="/src/assets/icon.png" alt="" />
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                </Box>
                </Link>

                <Box display="flex" marginLeft={90} gap={2.5}>
                    <Link to='/posts' className='text-decorator-none'>
                    <Box style={{ cursor: "pointer" }}>
                        <Typography color="inherit">
                            POSTAGENS
                        </Typography>
                    </Box>
                    </Link>
                    <Link to='/temas' className='text-decorator-none'>
                    <Box style={{ cursor: "pointer" }}>
                        <Typography color="inherit">
                            TEMAS
                        </Typography>
                    </Box>
                    </Link>
                    <Link to='/formularioTema' className='text-decorator-none'>
                    <Box style={{ cursor: "pointer" }}>
                        <Typography color="inherit">
                            CRIAR TEMA
                        </Typography>
                    </Box>
                    </Link>
                        <Box style={{ cursor: "pointer" }} onClick={goLogout}>
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