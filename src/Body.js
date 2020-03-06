import React, { Component } from 'react'

import Reactant from './Reactant'
import Product from './Product'
import Properties from './Properties'
import Diluent from './Diluent'

class Body extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfElements: props.numReactants + props.numProducts + props.numDiluents + 1
        }
    }

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

    getDiluents = numDiluents => {
        const diluents = []
        for (let i = 0; i < numDiluents; i++) {
            diluents.push(
                <Diluent
                    key={i}
                    number={i + 1}
                />
            )
        }
        return diluents
    }

    render() {
        const { numReactants, numProducts, numDiluents } = this.props
        const reactants = this.getReactants(numReactants)
        const products = this.getProducts(numProducts)
        const diluents = this.getDiluents(numDiluents)
        return (
            <div className="Body" style={{ ...style }}>
                <Properties />
                {reactants}
                {products}
                {diluents}
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