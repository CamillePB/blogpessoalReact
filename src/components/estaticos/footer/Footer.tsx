import react from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import './Footer.css';
import { GitHub } from '@mui/icons-material';

function Footer() {

    return (
        <>

            <Grid style={{ backgroundColor: "#ffffff", width: "100.6%" }} spacing={2} container direction="row" justifyContent="center">

                {/* Sobre o projeto */}
                <Grid item xs={4}>
                    <Box style={{ marginLeft: "40px" }}>
                        <h4 className='integrantes'>SOBRE O PROJETO</h4>
                        <p className="redeSocial">
                            A lua brilhava no céu estrelado </p>
                    </Box>
                </Grid>

                {/* lista de tecnologias */}
                <Grid item xs={5}>
                    <Box>
                        <h4 className='integrantes'>TECNOLOGIAS UTILIZADAS</h4>
                        <p className="redeSocial">
                            Java
                        </p>
                        <p className="redeSocial">
                            Java
                        </p>
                        <p className="redeSocial">
                            Java
                        </p>
                        <p className="redeSocial">
                            Java
                        </p>
                        <p className="redeSocial">
                            Java
                        </p>
                    </Box>
                </Grid>

                {/* redes */}
                <Grid item xs={2} >
                    <Box style={{ marginRight: "0px" }}>
                        <h4 className='integrantes'>REDES</h4>
                        <p className="redeSocial">
                            A lua brilhava no céu estrelado </p>
                    </Box>
                </Grid>

                {/* copyright */}
                <Grid item xs={11}>
                    <hr></hr>
                    <Box style={{ marginLeft: "60rem" }}>
                        <Typography variant="subtitle2" align="center" style={{ color: "black" }}>© 2020 Copyright:SaúdeCheckup</Typography>
                    </Box>
                </Grid>


            </Grid>














            {/* <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#6b1b1b", height: "80px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#6b1b1b", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid> */}
        </>
    )
}

export default Footer;