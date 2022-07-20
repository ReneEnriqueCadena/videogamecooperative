import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const RUTA = 'rutaquenomepasaelsantitodavia';



export function getAllGames(){
    return async function getAll(dispatch){
        let pedido = await axios.get(RUTA)
        return dispatch({
            type:GET_ALL_GAMES,
            payload: pedido.data
        })
    }
}