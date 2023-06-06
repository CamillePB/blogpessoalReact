
import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button, withStyles } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../service/Service';
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

const StyledButton = withStyles({
    root: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        marginTop: "7px",
        marginLeft: '1.5rem',
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

function CadastroTema() {
    //hook para direcornar o usuário no site
  let navigate = useNavigate();

  //hook que manipula parametros
  //recebendo informação como string e convertido em int no método
  const { id } = useParams<{id: string}>();

  //armazenar parametros dentro do reducer
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  //formato de envio da informaçao
  const [tema, setTema] = useState<Tema>({
      id: 0,//parametro
      descricao: ''//parametro
  })

  //se token for vazio, voltar para a tela login
  useEffect(() => {//efeito colateral
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


  //se um id existe, não fazer nada
  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  //async: funcionar sem ser chamada
  async function findById(id: string) {//encontrar tema por id
      buscaId(`/temas/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      function updatedTema(e: ChangeEvent<HTMLInputElement>) {

          setTema({
              ...tema,
              [e.target.name]: e.target.value,
          })
  
      }

      //ao enviar o dado:
      async function onSubmit(e: ChangeEvent<HTMLFormElement>) { //assistir o que o usário está digitando
          e.preventDefault()//persistir as informações
          console.log("tema " + JSON.stringify(tema))//leitura dos dados enviados por json
  
          //se existir id, fazer a atualizaçao
          if (id !== undefined) {
              console.log(tema)
              put(`/temas`, tema, setTema, {//atualiar
                  headers: {
                      'Authorization': token
                  }
              })
              toast.success('Tema atualizado com sucesso', {
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
            //se tema ainda não existir, fazer cadastro
              post(`/temas`, tema, setTema, {//cadastrar
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
  
      //redirecionar a temas
      function back() {
          navigate('/temas')
      }

    return (
      <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
          <Typography variant="h4" component="h1" align="center" >Cadastrar Tema</Typography>
          <CssTextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) =>
             updatedTema(e)} id="descricao" variant="outlined" label="Descrição" name="descricao" margin="normal" fullWidth/>
          <StyledButton type="submit" variant="contained" color="primary">
              Finalizar
          </StyledButton>
      </form>
  </Container>
    )
}

export default CadastroTema;