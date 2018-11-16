import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../Redux/Reducers/cart'
import axios from 'axios'

class JacketWrapper extends Component {
    constructor() {
        super()

        this.state = {
            isDisplayOpen: false
        }
    }

    openBuyDisplay = () => {
        let { isDisplayOpen } = this.state
        this.setState({
            isDisplayOpen: !isDisplayOpen
        })
    }

    alertItemToCart = (id) => {
        let { addToCart } = this.props
        axios.post(`/api/cart/product/${id}`).then(results => {
            addToCart(results)
        })
        alert('Successfully added to Cart')
    }

    render() {
        let { isDisplayOpen } = this.state
        let { j } = this.props
        return (
            <div key={j.product_id}>
                <img src={j.product_img} alt='jacket' onClick={this.openBuyDisplay}/>
                {
                    isDisplayOpen ?
                        <div>
                            <span> s </span>
                            <span> m </span>
                            <span> l </span>
                            <span onClick={() => this.alertItemToCart(j.product_id)}> add to cart .. </span>
                        </div> :
                        null
                }
                <div>
                    <span>{j.product_name}</span>
                    <span>{j.product_price}</span>
                </div>
            </div>
        )
    }
}



export default connect(null, { addToCart })(JacketWrapper)
