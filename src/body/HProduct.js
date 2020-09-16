// Hazard Number & Statement text box for a Product
import React from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

const HProduct = ({ number, index, products, ...props}) => {
    const properties = products[index]

    const handleChange = ev => {
        const newProperties = {...properties}
        newProperties[ev.target.name] = ev.target.value
        props.updateProduct(index, newProperties)
    }

    return (
        <div className='HProduct'>
            <h6 style={{ textAlign: 'center' }}>Product {number}</h6>
            <Input type="text" name="hNumbers" value={properties.hNumbers || ''} onChange={handleChange} />
            <Input type="text" name="hStatements" value={properties.hStatements || ''} onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.compound.products,
})

const mapDispatchToProps = {
    updateProduct: actions.compound.updateProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(HProduct)