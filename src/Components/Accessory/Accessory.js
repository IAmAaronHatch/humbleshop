import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getAccessories } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AccWrapper from './AccWrapper';

class Accessory extends Component {
    constructor() {
        super()

        this.state = {
            isDisplayOpen: false
        }
    }

    componentDidMount() {
        let { getAccessories } = this.props
        axios.get('/api/products/acc').then(results => {
            getAccessories(results.data)
        })
    }

    openBuyDisplay = () => {
        this.setState({
            isDisplayOpen: true
        })
    }



    render() {
        let { accessories } = this.props 
        return (
            <div>
                <Nav />
                {
                    accessories.map ((a) => {
                        return (
                            <div key={a.product_id}>
                                <AccWrapper key={a.product_id} a={a} />
                            </div>
                        )
                    })
                }
                <Footer />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        accessories: state.items.accessories
    }
}

export default connect(mapStateToProps, { getAccessories })(Accessory)
