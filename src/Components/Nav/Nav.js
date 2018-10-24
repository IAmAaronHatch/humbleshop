import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Components 
import Cart from '../Cart/Cart'

// Methods 
import methods from '../../util/methods'

// CSS
import './Nav.css'

let { login } = methods

class Nav extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                {/* * Insert Logo Here * */}
                <div className='main-center'>
                    <Link className='main-logo' to='/'>Humble Shop</Link>

                    {/* Right Side */}
                    <div>
                        <p onClick={login}> Login </p> |
                    <Cart />
                    </div>

                </div>
                <hr />
                <div className='link-main'>
                    <div className='link-container'>
                        <Link to='/shirts' id='link'> shirts . </Link>
                        <Link to='/jackets' id='link'> jackets . </Link>
                        <Link to='/accessories' id='link'> accessories . </Link>
                    </div>
                </div>

                <hr />

            </div>
        )
    }
}

export default Nav
