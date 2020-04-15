import React, { Component } from 'react'
import { Button } from 'reactstrap'
import actions from '../redux/actions'
import { connect } from 'react-redux'

import Reactant from './Reactant'
import Product from './Product'
import Properties from './Properties'
import Diluent from './Diluent'

class Body extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfElements: props.numReactants + props.numProducts + props.numDiluents + 1,
            reactants: {
                1: {
                   
                }
            }
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
                    temperature={this.props.operatingParams.temperature}
                    setHNums={this.props.setHNums}
                    addReactant={this.addReactant}
                    addReactantWtFraction={this.addReactantWtFraction}
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
                    setHNums={this.props.setHNums}
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
                    setHNums={this.props.setHNums}
                />
            )
        }
        return diluents
    }

    addReactant = (num, properties) => {
        const { reactants } = this.state
        reactants[num] = properties
        this.setState({ reactants })
    }

    addReactantWtFraction = (num, frac) => {
        const { reactants } = this.state
        reactants[num]['wtFraction'] = frac
        console.log('fracking is good')
        this.setState({ reactants })
    }

    render() {
        const { numReactants, numProducts, numDiluents } = this.props
        const reactants = this.getReactants(numReactants)
        const products = this.getProducts(numProducts)
        const diluents = this.getDiluents(numDiluents)
        return (
            <div className="Body">
                <div style={style}>
                    <Properties numberOfElements={this.state.numberOfElements} />
                    {reactants}
                    {products}
                    {diluents}
                </div>
                <div style={style}>
                    <Button
                        color="primary"
                        onClick={() => this.props.calculate(this.state.reactants)}
                    >
                        Calculate
                </Button>
                </div>
            </div>

        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center',
}

const mapStateToProps = state => ({
	numReactants: state.compound.numReactants,
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)