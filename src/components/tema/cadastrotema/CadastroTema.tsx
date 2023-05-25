
import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../service/Service';
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';


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
          alert("Você precisa estar logado")
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
              alert('Tema atualizado com sucesso');
          } else {
            //se tema ainda não existir, fazer cadastro
              post(`/temas`, tema, setTema, {//cadastrar
                  headers: {
                      'Authorization': token
                  }
              })
              alert('Tema cadastrado com sucesso');
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
          <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) =>
             updatedTema(e)} id="descricao" label="Descrição" name="descricao" margin="normal" fullWidth  color="white"/>
          <Button type="submit" variant="contained" color="primary">
              Finalizar
          </Button>
      </form>
  </Container>
    )
}

export default CadastroTema;