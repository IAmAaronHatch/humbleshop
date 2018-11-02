import React, { Component } from 'react'
// import axios from 'axios'
// import { connect } from 'react-redux'
// import { getAccessories } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Accessory extends Component {
    constructor() {
        super()

        this.state = {
            isDisplayOpen: false
        }
    }

    // componentDidMount(){
    //     let { getAccessories } = this.props
    //     axios.get('/api/products').then(results => {
    //         getAccessories(results.data)
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
                <Nav/>
                Accessories
                {/* {this.props.accessory.map(accessory => {
                    return (
                        <div key={accessory.id}>

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
//         accessories: state.items.accessories
//     }
// }

export default Accessory
