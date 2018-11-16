import React, { Component } from 'react'
import axios from 'axios'
import { addToCart } from '../../Redux/Reducers/cart'
import { connect } from 'react-redux'

class ShirtWrapper extends Component {
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
        let { s } = this.props
        return (
            <div key={s.product_id}>
                <img src={s.product_img} alt='shirt' onClick={this.openBuyDisplay} />
                {
                    isDisplayOpen ?
                        <div>
                            <span> s </span>
                            <span> m </span>
                            <span> l </span>
                            <span onClick={() => this.alertItemToCart(s.product_id)}> add to cart .. </span>
                        </div> :
                        null
                }
                <div>
                    <span>{s.product_name}</span>
                    <span>{s.product_price}</span>
                </div>
            </div>
        )
    }
}


export default connect(null, { addToCart })(ShirtWrapper)
