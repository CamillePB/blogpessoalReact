import axios from 'axios';

//consumo da API do backend na núvem com axios
export const api = axios.create({
    baseURL: 'https://blogpessoal-bwno.onrender.com'
})

export const login = async(url:any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

//função cadastroUsuario da página CadastroUser
export const cadastroUsuario = async(url:any, dados:any, setDado:any) => {
    //esperar para o usuário inserir os dados
    const resposta = await api.post(url, dados)
    setDado(resposta.data)//guardando exclusivamente o token
}
