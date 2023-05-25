//modelo de dados
export interface UserState{
  tokens: string,
}

//token inicia vazio
const initialState = {
  tokens: "",
}

export const reducer = (state: UserState = initialState, action: any) => {
  switch(action.type) {
      case "ADD_TOKEN":{
          return{
              tokens: action.payload//elemento: puxa o token e playload
          }
      }
      default:
          return state//devolver token
  }
}