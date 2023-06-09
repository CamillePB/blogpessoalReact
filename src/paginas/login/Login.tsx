import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button, withStyles} from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/token/Actions';
import './Login.css';
import { toast } from 'react-toastify';

const StyledButton = withStyles({
    root: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        marginTop: "7px",
        backgroundColor: '#489674',
        color: 'white',
        border: '1px',
        height: 36,
        padding: '0 20px',
        //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover': {
            backgroundColor: '#537A56',
            borderRadius: 3,
            borderColor: '#C1ECFF',
            color: 'white',
        },
    },
    label: {
        textTransform: 'capitalize',
    },

})(Button);

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#A6E4FF',
        },
        '& label': {
            color: '#A6E4FF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#C1ECFF',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(0, 121, 130, 0.2)',
            color:'white',
            '& fieldset': {
                borderColor: '#57BBE6',
            },
            '&:hover fieldset': {
                borderColor: '#C1ECFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#C1ECFF',
            },
            '&:hover': {
                backgroundColor: 'rgba(0, 121, 130, 0.8)',
            },
            '&$focused': {
                backgroundColor: 'rgba(0, 121, 130, 1)',
                boxShadow: '#C1ECFF',
                borderColor: '#C1ECFF',
                color: '#57BBE6',
            },
        },
        focused: {},
    },
})(TextField);


function Login() {
    // eslint-disable-next-line prefer-const
    let navigate = useNavigate();

    const dispatch = useDispatch();

    //guardar o token do login validado
    const [token, setToken] = useState('');

    //iniciando um usuario com base em UserLogin
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    //direcionar para pagina home, se usuario for valido
    useEffect(() => {
        if (token !== '') {
            console.log("Token:", token)
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imagem'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom  align='center'>Entrar</Typography>
                        <CssTextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <CssTextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <StyledButton type='submit' variant='contained'>Logar</StyledButton>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>


        </Grid>
    );
}

export default Login;

function useStylesReddit() {
    throw new Error('Function not implemented.');
}
