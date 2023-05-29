import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        marginTop:"7px",
        backgroundColor: '#50A982',
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
                backgroundColor: 'rgba(0, 121, 130, 0.5)',
            },
            '&$focused': {
                backgroundColor: 'rgba(0, 121, 130, 0.5)',
                boxShadow: '#C1ECFF',
                borderColor: '#C1ECFF',
                color: '#57BBE6',
            },
        },
        focused: {},
    },
})(TextField);

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso!')
        } else {
            alert('Dados inválidos. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container className='imagem2' direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={5} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <CssTextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <CssTextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <CssTextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />
                        <CssTextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <CssTextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <StyledButton type='submit' variant='contained'>Cadastrar</StyledButton>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;