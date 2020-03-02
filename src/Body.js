import React, { Component } from 'react'

import Reactant from './Reactant'
import Product from './Product'
import Properties from './Properties'

class Body extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfElements: props.numReactants + props.numProducts + 2
        }
    }

    // componentDidUpdate(prevProps) {
    //     const numberOfElements = this.props.numReactants + this.props.numProducts + 2
    //     if (numberOfElements !== this.state.numberOfElements) {
    //         this.setState({ numberOfElements })
    //     }
    // }

    getReactants = numReactants => {
        const reactants = []
        for (let i = 0; i < numReactants; i++) {
            reactants.push(
                <Reactant
                    key={i}
                    number={i + 1}
                />
            )
        }
        return reactants
    }

    getProducts = numProducts => {
        const products = []
        for (let i = 0; i < numProducts; i++) {
            products.push(
                <Product
                    key={i}
                    number={i + 1}
                />
            )
        }
        return products
    }

    render() {
        const reactants = this.getReactants(this.props.numReactants)
        const products = this.getProducts(this.props.numProducts)
        return (
            <div className="Body" style={{ ...style }}>
                <Properties />
                {reactants}
                {products}
            </div>
        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
}

export default Body