import React, { useEffect } from 'react';
//import './Home.css';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';
import { withStyles } from '@material-ui/core';


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

function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    function cadastrar() {
        navigate('/formularioPostagem')
    }


    return (
        <>
            <Grid container direction="row" justifyContent="start" alignItems="center" style={{ background: 'linear-gradient(100deg, #191919 50%, #00DA98 100%)' }}>
                <Grid alignItems="start" item xs={6}>
                    <Box paddingX={10} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" style={{ color: "white" }}>Seja bem vindo(a)!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <StyledButton onClick={cadastrar}>Criar Postagem</StyledButton>
                    </Box>
                </Grid>
                <Grid item xs={4} justifyContent="end">
                    <img src="/src/assets/borboleta.png" alt="" style={{ paddingTop: "100px", paddingBottom: "0px", opacity: '40%', width: "0px", height: "300px" }} />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
            {/* <Grid container style={{ marginTop: "8px" }}>
                    <Grid item xs={12}>
                         <Carrossel />
                    </Grid>
                </Grid> */}
        </>
    )
}

export default Home;