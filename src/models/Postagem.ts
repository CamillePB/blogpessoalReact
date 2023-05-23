import Tema from './Tema'
//precisa das imformações de Tema.ts

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;