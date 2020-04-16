import React from 'react'
import { Button } from 'reactstrap'
import actions from '../redux/actions'
import { connect } from 'react-redux'

import Reactant from './Reactant'
import Product from './Product'
import Properties from './Properties'
import Diluent from './Diluent'

const Body = props => {

    // validate data
    const handleClick = () => {
        try {
            validateOperatingParams(props.operatingParams)
            validateReactants(props.reactants)
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
            
            fractions.push(Number(molWtFraction))
        })

        // validate that weight fractions add to 1
        const sum = fractions.reduce((a, b) => a + b, 0)
        if (sum !== 1)
            throw new Error('Please make sure weight fractions add to 1')
    }

    const { numReactants, numProducts, numDiluents } = props
    return (
        <div className="Body">
            <div style={style}>
                <Properties />
                {/* this is just a hacky way to map numReactants number of times: */}
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
            <div style={style}>
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

const style = {
    display: 'flex',
    justifyContent: 'center',
}

const mapStateToProps = state => ({
    numReactants: state.compound.numReactants,
    numProducts: state.compound.numProducts,
    numDiluents: state.compound.numDiluents,

    reactants: state.compound.reactants,
    operatingParams: state.operatingParams,
})

const mapDispatchToProps = {
    calculate: actions.report.calculate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)