
let initialState = {
    data: {},
}

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, data: action.payload }
        case LOGOUT:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export function getUser (name) {
    console.log(name)
    return {
        type: GET_USER,
        payload: name
    }
}

export function logout () {
    return {
        type: LOGOUT,
        payload: null
    }
}