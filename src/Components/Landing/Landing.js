import React, { Component } from 'react'
// import axios from 'axios'

//  Components
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

class Landing extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Nav/>

                <hr/>
                * Insert Photos Here *
                <Footer/>
            </div>
        )
    }
}

export default Landing
