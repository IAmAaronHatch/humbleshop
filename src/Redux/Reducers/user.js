
let initialState = {
    data: '',
}

const FULFILLED = '_FULFILLED'

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export function getUser (name) {
    return {
        type: GET_USER,
        payload: name
    }
}