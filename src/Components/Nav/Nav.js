import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Components 
import Cart from '../Cart/Cart'

import './Nav.css'

class Nav extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    login = () => {
        alert('Login')
    }


    render() {
        return (
            <div>
                {/* * Insert Logo Here * */}
                <Link className='Main-Logo' to='/'>Humble Shop</Link>


                {/* Right Side */}
                <div>
                    <p onClick={this.login}> Login </p> |
                    <Cart />
                </div>
                <hr />
                <div>
                    <Link to='/accessories'> Accessories </Link>
                    <Link to='/shirts'> Shirts </Link>
                    <Link to='/jackets'> Jackets </Link>
                </div>
                
            </div>
        )
    }
}

export default Nav
