import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getAccessories } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

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
        return (
            <div>
                <Nav />
                {this.props.accessories.map(acc => {
                    return (
                        <div key={acc.product_id}>
                            <img src={acc.product_img} alt='Accessories Product Image'/>
                            <span>{acc.product_name}</span>
                            <span>{acc.product_price}</span>
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
        accessories: state.items.accessories
    }
}

export default connect(mapStateToProps, { getAccessories })(Accessory)
