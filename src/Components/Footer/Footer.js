import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class Footer extends Component {

    render() {
        return (
            <div className='main'>
                * Insert Mail Insert *

                <Link to='/'>Home</Link>

                * Insert Twitter *
                <a href='https://www.instagram.com/iamnotaaronhatch/?hl=en'>Instagram</a>
                {/* About Page? */}
            </div>
        )
    }
}

export default Footer
