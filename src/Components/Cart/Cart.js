import React, { Component } from 'react'
// import axios from 'axios'

class Cart extends Component {
    constructor() {
        super()

        this.state = {
            cartOpen: false
        }
    }

    openCart = () => {
        alert('open')
        // let { cartOpen } = this.state

        // this.setState({ cartOpen: !cartOpen })

        // if (cartOpen) {
        //     document.getElementById('mySidenav').style.width = '250px'
        // }
    }

    closeCart = () => {
        let { cartOpen } = this.state

        this.setState({ cartOpen: !cartOpen })

        document.getElementById("mySidenav").style.width = "0px";
    }


    render() {
        // let { cartOpen } = this.state
        return (
            <div>
                <span onClick={this.openCart}> cart </span>
                <span>#</span>

                {/* <div id='mySidenav' className='sidenav'>
                    <span onClick={this.closeCart}>Close Cart</span>
                    <span>Inside Cart</span>
                </div> */}

            </div>
        )
    }
}

export default Cart
