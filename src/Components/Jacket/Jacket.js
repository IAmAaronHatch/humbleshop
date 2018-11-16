import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getJackets } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import JacketWrapper from './JacketWrapper';

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
        let { jackets } = this.props
        return (
            <div>
                <Nav />
                {
                    jackets.map ((j) => {
                        return (
                            <div key={j.product_id}>
                                <JacketWrapper key={j.product_id} j={j}/>
                            </div>
                        )
                    }
                )}
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
