import React from 'react'
import { Button } from 'reactstrap'
import actions from '../redux/actions'
import { connect } from 'react-redux'

import Reactant from './Reactant'
import Product from './Product'
import Properties from './Properties'
import Diluent from './Diluent'
import Hazard from './Hazard'
import HReactant from './HReactant'
import HProduct from './HProduct'
import HDiluent from './HDiluent'

const Body = props => {

    // validate data
    const handleClick = () => {
        try {
            validateOperatingParams(props.operatingParams)
            // check if we have are using a global cp or cp/reactant
            const cpMix = props.operatingParams.cp !== '' ? true : false
            if (!cpMix)
                validateReactants(props.reactants)

            props.calculate(props.operatingParams)

        } catch (error) {
            alert(error)
        }
    }

    const validateOperatingParams = operatingParams => {
        // temperature
        if (!operatingParams.temperature)
            throw new Error("Please enter a temperature")

        if (isNaN(Number(operatingParams.temperature)))
            throw new Error("Please enter a valid temperature")

        // pressure
        if (!operatingParams.pressure)
            throw new Error("Please enter a pressure")

        if (isNaN(Number(operatingParams.pressure)) || Number(operatingParams.pressure) < 0)
            throw new Error("Please enter a valid pressure")

        // heat of reaction
        if (!operatingParams.heatOfReaction)
            throw new Error("Please enter a heat of reaction")

        if (isNaN(Number(operatingParams.temperature)))
            throw new Error("Please enter a valid heat of reaction")
    }

    // valdate cp, molWtFraction
    const validateReactants = reactants => {
        const fractions = []
        reactants.forEach((reactant, i) => {
            const { cp, molWtFraction } = reactant
            const number = i + 1

            // cp validation
            if (cp === '') throw new Error('Please enter a valid cp for reactant ' + number)
            if (isNaN(Number(cp)) || Number(cp) < 0)
                throw new Error('Please enter a valid cp for reactant ' + number)

            // initial weight fraction validation
            if (isNaN(Number(molWtFraction)) || Number(molWtFraction) < 0)
                throw new Error('Please enter a valid weight fraction for reactant ' + number)

            fractions.push(molWtFraction)
        })

        // add weight fractions of products
        props.products.forEach(product => {
            fractions.push(product.molWtFraction)
        })


        // add weight fractions of diluents
        props.diluents.forEach(diluent => {
            fractions.push(diluent.molWtFraction)
        })


        // validate that weight fractions add to 1
        const sum = fractions.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
        if (sum.toPrecision(3) !== '1.00')
            throw new Error('Please make sure weight fractions add to 1')
    }

    const { numReactants, numProducts, numDiluents } = props
    return (
        <div className="Body">
            <div style={styles.main}>
                <Properties />
                {/* this is just a hacky way to map x number of times: */}
                {
                    [...Array(numReactants)].map((e, i) => (
                        <Reactant
                            key={i}
                            index={i}
                            number={i + 1}
                        />
                    ))
                }
                {
                    [...Array(numProducts)].map((e, i) => (
                        <Product
                            key={i}
                            index={i}
                            number={i + 1}
                        />
                    ))
                }
                {
                    [...Array(numDiluents)].map((e, i) => (
                        <Diluent
                            key={i}
                            index={i}
                            number={i + 1}
                        />
                    ))
                }
            </div>
            
            <div className='Hazard' style={styles.hazard}>
                <Hazard />
                {/* this is just a hacky way to map x number of times: */}
                {
                    [...Array(numReactants)].map((e, i) => (
                        <HReactant
                            key={i}
                            index={i}
                            number={i + 1}
                        />
                    ))
                }
                {
                    [...Array(numProducts)].map((e, i) => (
                        <HProduct
                            key={i}
                            index={i}
                            number={i + 1}
                        />
                    ))
                }
                {
                    [...Array(numDiluents)].map((e, i) => (
                        <HDiluent
                            key={i}
                            index={i}
                            number={i + 1}
                        />
                    ))
                }
            </div>


            <div style={styles.button}>
                <Button
                    color="primary"
                    onClick={handleClick}
                >
                    Calculate
                </Button>
            </div>
        </div>
    )
}

const  styles = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },

    hazard: {
        display: 'flex',
        justifyContent: 'center',
        height: 'auto',
        paddingTop: '2em',
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2em 0',
    }
}

const mapStateToProps = state => ({
    numReactants: state.compound.numReactants,
    numProducts: state.compound.numProducts,
    numDiluents: state.compound.numDiluents,

    reactants: state.compound.reactants,
    products: state.compound.products,
    diluents: state.compound.diluents,
    operatingParams: state.operatingParams,
})

const mapDispatchToProps = {
    calculate: actions.report.calculate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)