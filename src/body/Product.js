import React from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

const Product = props => {

    // when a file is uploaded, parse it
    const handleFileSelect = e => {
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        props.parseProductFile(props.index, props.temperature, formData)
    }

    const handleChange = e => {
        const properties = { ...props.products[props.index] }
        properties[e.target.name] = e.target.value
        props.updateProduct(props.index, properties)
    }

    const { number, index } = props
    const properties = props.products[index]
    return (
        <div className="Product" style={styles.main}>
            <h4 sm="4">Product {number}</h4>

            <label className="customFileInput" style={styles.customFileInput}>
                <Input
                    type="file"
                    name="file"
                    encType="multipart/form-data"
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />
                    Upload SDS
            </label>
            <Input type="text" name="productName" value={properties.productName} onChange={handleChange} />
            <Input type="text" name="molWtFraction" value={properties.molWtFraction} onChange={handleChange} />
            <Input type="text" name="molWt" value={properties.molWt} onChange={handleChange} />
            <Input type="text" name="casNo" value={properties.casNo} onChange={handleChange} />
            <br />

            <Input type="text" name="ph" value={properties.ph} onChange={handleChange} />
            <Input type="text" name="boilingPt" value={properties.boilingPt} onChange={handleChange} />
            <Input type="text" name="flashPt" value={properties.flashPt} onChange={handleChange} />
            <Input type="text" name="upperExplosionLim" value={properties.upperExplosionLim} onChange={handleChange} /> {/* upper explosion limit */}
            <Input type="text" name="lowerExplosionLim" value={properties.lowerExplosionLim} onChange={handleChange} /> {/* lower explosion limit  */}
            <Input type="text" name="vapourPressure" value={properties.vapourPressure} onChange={handleChange} />
            <Input type="text" name="vapourDensity" value={properties.vapourDensity} onChange={handleChange} />
            <Input type="text" name="relDensity" value={properties.relDensity} onChange={handleChange} />
            <Input type="text" name="autoIgnitionTemp" value={properties.autoIgnitionTemp} onChange={handleChange} />
            <Input type="text" name="decompositionTemp" value={properties.decompositionTemp} onChange={handleChange} />
            <Input type="text" name="viscosity" value={properties.viscosity} onChange={handleChange} />
            <Input type="text" name="thermalConductivity" value={properties.viscosity} onChange={handleChange} /> {/* Thermal conductivity */}
            <Input type="text" name="cp" value={properties.cp} onChange={handleChange} /> {/* CP */}
        </div>
    )

}

const styles = {
    main: {
        display: 'grid',
        gridTemplateRows: 'repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))',
        alignSelf: 'start',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
    },
    
    customFileInput: {
        color: 'white',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        padding: '.375rem .75rem',
        border: '1px solid transparent',
        borderRadius: '.25rem',
        lineHeight: '1.5',
        fontWeight: '400',
        fontSize: '1rem',
        cursor: 'pointer',
        width: '50%',
        justifySelf: 'center',
    },
}

const mapStateToProps = state => ({
    temperature: state.operatingParams.temperature,
    products: state.compound.products,
})

const mapDispatchToProps = {
    parseProductFile: actions.compound.parseProductFile,
    updateProduct: actions.compound.updateProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)