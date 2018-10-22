import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Accessory extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Nav/>
                Accessories
                <Footer />
            </div>
        )
    }
}

export default Accessory
