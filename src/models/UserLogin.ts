//atributos necessários para validar o login
interface UserLogin {
  id: number;
  usuario: string;
  senha: string;
  token?: string| null
}

export default UserLogin;