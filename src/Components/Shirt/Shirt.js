import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getShirts } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Shirt extends Component {
    constructor() {
        super()

        this.state = {
            isDisplayOpen: false
        }
    }

    componentDidMount() {
        let { getShirts } = this.props
        axios.get('/api/products/shirt').then(results => {
            getShirts(results.data)
        })
    }
    
    openBuyDisplay = () => {
        this.setState ({
            isDisplayOpen: true
        })
    }
    
    

    render() {
        console.log('shirt page', this.props.shirts)
        return (
            <div>
                <Nav />
                Shirts
                {this.props.shirts.map(shirt => {
                    return (
                        <div key={shirt.product_id}>
                            <span>{shirt.product_name}</span>
                        </div>
                    )
                })}
                <Footer />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        shirts: state.items.shirts
    }
}

export default connect(mapStateToProps, {getShirts})(Shirt)
