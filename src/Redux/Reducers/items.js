
let initialState = {
    shirts: [],
    jackets: [],
    accessories: []
}

// const FULFILLED = '_FULFILLED'

const GET_SHIRT = 'GET_SHIRT'
const GET_JACKET = 'GET_JACKET'
const GET_ACCESSORY = 'GET_ACCESSORY'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SHIRT:
            return { ...state, shirts: action.payload }
        case GET_JACKET:
            return { ...state, jackets: action.payload }
        case GET_ACCESSORY:
            return { ...state, accessories: action.payload }
        default: return state
    }
}

export function getShirt () {
    return {
        type: GET_SHIRT,
        payload: null
    }
}
export function getJacket () {
    return {
        type: GET_JACKET,
        payload: null
    }
}
export function getAccessory () {
    return {
        type: GET_ACCESSORY,
        payload: null
    }
}