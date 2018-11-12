import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

// Components 
import Cart from '../Cart/Cart'

// Methods 
// import methods from '../../util/methods'

// CSS
import './Nav.css'

// let { login } = methods

class Nav extends Component {
    constructor() {
        super()

        this.state = {
            cartOpen: false
        }
    }
    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

        window.location = location     
    }

    openCart = () => {
        let { cartOpen }= this.state 
        
        this.setState({ cartOpen: !cartOpen })

        if (cartOpen) {
            document.getElementById('mySidenav').style.width = '250px'
        } else {
            this.closeCart()
        }
    }
    
    closeCart = () => {
        document.getElementById("mySidenav").style.width = "0px";
    }


    render() {
        return (
            <div>
                {/* * Insert Logo Here * */}
                <div className='main-center'>
                    <Link className='main-logo' to='/'> humble shop. </Link>

                    {/* Right Side */}
                    <div>
                        <p onClick={this.login}> Login </p> |
                    <Cart />
                    </div>

                </div>
                <hr />
                <div className='link-main'>
                    <div className='link-container'>
                        <Link to='/shirts' id='link'> shirts. </Link>
                        <Link to='/jackets' id='link'> jackets. </Link>
                        <Link to='/accessories' id='link'> accessories. </Link>
                    </div>
                </div>

                <hr />

            </div>
        )
    }
}

export default Nav
