import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, withStyles, createStyles, InputBase, Theme } from "@material-ui/core"
import './CadastroPostagem.css';
import {useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

const StyledButton = withStyles({
    root: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        marginTop: "7px",
        marginLeft: '10rem',
        backgroundColor: '#489674',
        color: 'white',
        border: '1px',
        height: 36,
        padding: '0 20px',
        width: '7rem',
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
        width: '422px',
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

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '.MuiSelect-select.MuiSelect-select': {
                paddingRight: '400px',
            },
            'label + &': {
                marginTop: theme.spacing(2),
                color: '#A6E4FF',
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: 'rgba(0, 121, 130, 0.5)',
            border: '1px solid #C1ECFF',
            fontSize: 16,
            padding: '16px 0px 16px 0px',
            color: '#A6E4FF',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                backgroundColor: 'rgba(0, 121, 130, 0.5)',
                borderRadius: 4,
                border: '0.8px solid #C1ECFF',
                boxShadow: '0 0 0 0.08rem #C1ECFF',   
            },
            
        },
    }),
)(InputBase);

//text estilizado
// const StyledTitle = withStyles({
//     root: {
//         color: '#155263',
//         paddingTop: '3rem',
//         paddingBottom: '1rem',
//         textAlign: 'center',
//         fontWeight: 'bold'
//     },
// })(Typography);

function CadastroPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.error('Dados do usuário inconsistentes.', {
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
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
            <Typography variant='h4' gutterBottom component='h3' align='center'>Cadastrar Postagem</Typography>
                <CssTextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <CssTextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl style={{width:'422px'}} variant="outlined">
                    <InputLabel id="demo-simple-select-helper-label" className='txtTema'>tema </InputLabel>
                    <Select
                    variant="outlined"
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}
                        input={<BootstrapInput />}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText className='txtMessage'>Escolha um tema para a postagem</FormHelperText>
                    <StyledButton type="submit" variant="contained" color="primary">
                        Finalizar
                    </StyledButton>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;