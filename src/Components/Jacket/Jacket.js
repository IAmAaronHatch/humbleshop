import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Jacket extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Nav />
                Jackets
                <Footer />
            </div>
        )
    }
}

export default Jacket
