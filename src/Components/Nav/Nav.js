import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Components 
import Cart from '../Cart/Cart'

// Methods 
// import methods from '../../util/methods'

// CSS
import './Nav.css'

// let { login } = methods

class Nav extends Component {
    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

        window.location = location
    }

    render() {
        let { user } = this.props
        return (
            <div className='main-container'>
                <div className='top-container'>
                    <div className='main-left'>
                    </div>
                    <div className='main-center'>
                        <Link id='main-logo' to='/'> humble shop. </Link>
                    </div>
                    <div className='main-right'>
                        
                        <Cart />
                    </div>
                </div>

                <div className='link-main'>
                    <div className='link-container'>
                        <Link to='/shirts' id='link'> shirts. </Link>
                        <Link to='/jackets' id='link'> jackets. </Link>
                        <Link to='/accessories' id='link'> accessories. </Link>
                    </div>
                </div>


            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Nav)
