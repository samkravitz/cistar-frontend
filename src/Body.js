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

    getNumberOfElements = (reactants, products, diluents) => {
        // + 1 to account for products column
        return reactants + products + diluents + 1
    }

    // update number of Reactants, Products, Diluents that will be rendered
    componentDidUpdate(prevProps, prevState) {
        const { numReactants, numProducts, numDiluents } = this.props
        const numberOfElements = this.getNumberOfElements(numReactants, numProducts, numDiluents)
        if (prevState.numberOfElements !== numberOfElements) {
            this.setState({ numberOfElements })
        }
    }

    getReactants = numReactants => {
        const reactants = []
        for (let i = 0; i < numReactants; i++) {
            reactants.push(
                <Reactant
                    key={i}
                    number={i + 1}
                    showGraphs={this.props.showGraphs}
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
                <Properties numberOfElements={this.state.numberOfElements}/>
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