import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getShirts } from '../../Redux/Reducers/items'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ShirtWrapper from './ShirtWrapper';

import './Shirt.css'

class Shirt extends Component {
    

    componentDidMount() {
        let { getShirts } = this.props
        axios.get('/api/products/shirt').then(results => {
            getShirts(results.data)
        })
    }

    



    render() {
        let { shirts } = this.props
        return (
            <div >
                <Nav />
                <div className='main'>
                    {
                        shirts.map ((s) => (
                            <div key={s.product_id}>
                                <ShirtWrapper key={s.product_id} s={s}/>
                            </div>
                        ))
                    }
                </div>
                
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

export default connect(mapStateToProps, { getShirts })(Shirt)
