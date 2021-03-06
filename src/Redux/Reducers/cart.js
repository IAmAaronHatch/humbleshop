
let initialState = {
    cart: []
}

// const FULFILLED = '_FULFILLED'

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const CHECKOUT = 'CHECKOUT'

export default function reducer (state = initialState, action) {
    switch (action.type){
        case GET_CART:
            return { ...state, cart: action.payload}
        case ADD_TO_CART:
            return { ...state, cart: action.payload}
        case UPDATE_QUANTITY:
            return { ...state, cart: action.payload}
        case DELETE_FROM_CART:
            return { ...state, cart: action.payload}
        case CHECKOUT:
            return { ...state, cart: action.payload}
        default: 
            return state
    }
}

function getCart () {
    return {
        type: GET_CART,
        payload: null
    }
}
function addToCart () {
    return {
        type: ADD_TO_CART,
        payload: null
    }
}
function updateQuantity () {
    return {
        type: UPDATE_QUANTITY,
        payload: null
    }
}
function deleteFromCart () {
    return {
        type: DELETE_FROM_CART,
        payload: null
    }
}
function checkout () {
    return {
        type: CHECKOUT,
        payload: null
    }
}