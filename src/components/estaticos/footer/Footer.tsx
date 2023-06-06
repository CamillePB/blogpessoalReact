import react from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './Footer.css';
import { GitHub } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

function Footer() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    let footerComponent;

    if (token !== "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            
            <Grid alignItems="center" item xs={4}>
                            <img src="src\assets\imagemCamille.jpg" alt="" height={100}/>
                        </Grid>
                        <Grid alignItems="center" item xs={4} style={{  height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white", fontSize:'12px' }} >Desenvolvedora Fullstack Júnior, formada como Técnico em Desenvolvimento de Sistemas.
                               Desenvolvi projetos utilizando diversas linguagens e tecnologias, tais como Java, SQL, Git, Spring Boot, React.js, React Native, entre outras.</Typography>
                    </Box>
                    </Grid>
                    <Grid alignItems="center" item xs={4}>
                        <a target="_blank" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">© 2020 Copyright: Camille Bueno</Typography>
                        </a>
                   </Grid>
            
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;