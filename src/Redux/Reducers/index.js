import { combineReducers } from 'redux'

import cart from './cart'
import items from './items'
import user from './user'

export default combineReducers({ user, cart, items })