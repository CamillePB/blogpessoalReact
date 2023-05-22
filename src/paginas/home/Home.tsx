import React from 'react';
//import './Home.css';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#992a2a"}}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#1d1616", backgroundColor: "#302525", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
  </Grid>
            <Grid container style={{ marginTop: "8px" }}>
                    <Grid item xs={12}>
                         <Carrossel />
                    </Grid>
                </Grid>
    </>
  )
}

export default Home;