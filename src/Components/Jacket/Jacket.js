import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getJackets } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Jacket extends Component {
    constructor() {
        super()

        this.state = {
            isDisplayOpen: false
        }
    }

    componentDidMount(){
        let { getJackets } = this.props 
        axios.get('/api/products/jacket').then(results => {
            getJackets(results.data)
        })
    }

    openBuyDisplay = () => {
        this.setState({
            isDisplayOpen: true
        })
    }

    


    render() {
        console.log('jackets page', this.props.jackets)
        return (
            <div>
                <Nav />
                Jackets
                {this.props.jackets.map(jacket => {
                    return (
                        <div key={jacket.product_id}>
                            <span>{jacket.product_name}</span>
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
        jackets: state.items.jackets
    }
}

export default connect(mapStateToProps, {getJackets})(Jacket)
