import React from 'react'
import { Button } from 'reactstrap'
import actions from '../redux/actions'
import { connect } from 'react-redux'

import Reactant from './Reactant'
import Product from './Product'
import Properties from './Properties'
import Diluent from './Diluent'

const Body = ({ numReactants, numProducts, numDiluents }) => {
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
                    onClick={() => this.props.calculate(this.state.reactants)}
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
})

export default connect(mapStateToProps)(Body)