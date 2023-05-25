export type Action = {type: "ADD_TOKEN"; payload: string};

export const addToken = (token: string) : Action => ({
    type: "ADD_TOKEN",//chama a ação de adicionar token
    payload: token,//recebe o resultado a ação
})