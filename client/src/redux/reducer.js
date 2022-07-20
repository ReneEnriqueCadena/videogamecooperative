import {} from './actions'


const initialState = {
    allGames: [],
    allGamesFiltered: [],
    filter: '',
    detail: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}