import {createStore} from "redux"
import {reducer} from "./token/Reducer"

//criar loja reducer
const store = createStore(reducer);

export default store;