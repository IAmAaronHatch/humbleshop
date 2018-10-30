import React, { Component } from 'react'
// import axios from 'axios'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Shirt extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Nav />
                Shirts
                <Footer />
            </div>
        )
    }
}

export default Shirt
