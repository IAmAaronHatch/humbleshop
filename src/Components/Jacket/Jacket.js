import React, { Component } from 'react'
// import axios from 'axios'
// import { connect } from 'react-redux'
// import { getJackets } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Jacket extends Component {
    constructor() {
        super()

        this.state = {
            isDisplayOpen: false
        }
    }

    // componentDidMount(){
    //     let { getJackets } = this.props 
    //     axios.get('/api/products').then(results => {
    //         getJackets(results.data)
    //     })
    // }

    openBuyDisplay = () => {
        this.setState({
            isDisplayOpen: true
        })
    }

    


    render() {
        return (
            <div>
                <Nav />
                Jackets
                {/* {this.props.jackets.map(jacket => {
                    return (
                        <div key={jacket.id}>

                        </div>
                    )
                })} */}
                <Footer />
            </div>
        )
    }
}

// let mapStateToProps = state => {
//     return {
//         jackets: state.items.jackets
//     }
// }

export default Jacket
