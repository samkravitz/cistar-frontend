import React from 'react'
import { connect } from 'react-redux'

const Alert = props => {

    const compareReactants = () => {
        const arr = []

        // calculation failed
        if (isNaN(props.reactionInfo.finalTemp))
            return arr
        
        for (let i = 0; i < props.numReactants; i++) {
            // boilingPt
            if (!isNaN(Number(props.reactants[i].boilingPt))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.reactants[i].boilingPt) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds reactant {i + 1} boiling point</span><br/></>)
                }
            }

            // flashPt
            if (!isNaN(Number(props.reactants[i].flashPt))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.reactants[i].flashPt) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds reactant {i + 1} flash point</span><br/></>)
                }
            }

            // decompositionTemp
            if (!isNaN(Number(props.reactants[i].decompositionTemp))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.reactants[i].decompositionTemp) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds reactant {i + 1} decomposition temp</span><br/></>)
                }
            }

            // autoignitionTemp
            if (!isNaN(Number(props.reactants[i].autoignitionTemp))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.reactants[i].autoignitionTemp) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds reactant {i + 1} auto ignition temp</span><br/></>)
                }
            }
        }

        return arr
    }

    const compareProducts = () => {
        const arr = []
        
        // calculation failed
        if (isNaN(props.reactionInfo.finalTemp))
            return arr
        
        for (let i = 0; i < props.numProducts; i++) {
            // boilingPt
            if (!isNaN(Number(props.products[i].boilingPt))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.products[i].boilingPt) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds product {i + 1} boiling point</span><br/></>)
                }
            }

            // flashPt
            if (!isNaN(Number(props.products[i].flashPt))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.products[i].flashPt) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds product {i + 1} flash point</span><br/></>)
                }
            }

            // decompositionTemp
            if (!isNaN(Number(props.products[i].decompositionTemp))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.products[i].decompositionTemp) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds product {i + 1} decomposition temp</span><br/></>)
                }
            }

            // autoignitionTemp
            if (!isNaN(Number(props.products[i].autoignitionTemp))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.products[i].autoignitionTemp) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds product {i + 1} auto ignition temp</span><br/></>)
                }
            }
        }

        return arr
    }

    const compareDiluents = () => {
        const arr = []

        // calculation failed
        if (isNaN(props.reactionInfo.finalTemp))
            return arr
        
        for (let i = 0; i < props.numDiluents; i++) {
            // boilingPt
            if (!isNaN(Number(props.diluents[i].boilingPt))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.diluents[i].boilingPt) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds diluent {i + 1} boiling point</span><br/></>)
                }
            }

            // flashPt
            if (!isNaN(Number(props.diluents[i].flashPt))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.diluents[i].flashPt) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds diluent {i + 1} flash point</span><br/></>)
                }
            }

            // decompositionTemp
            if (!isNaN(Number(props.diluents[i].decompositionTemp))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.diluents[i].decompositionTemp) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds diluent {i + 1} decomposition temp</span><br/></>)
                }
            }

            // autoignitionTemp
            if (!isNaN(Number(props.diluents[i].autoignitionTemp))) {
                if (Number(props.reactionInfo.finalTemp) > Number(props.diluents[i].autoignitionTemp) ) {
                    arr.push(<><span style={style.alert}>Final temp exceeds diluent {i + 1} auto ignition temp</span><br/></>)
                }
            }
        }

        return arr
    }

    const compareSideReactions = () => {
        const arr = []

        // valid final temp
        if (!isNaN(props.reactionInfo.finalTemp)) {
            for (let i = 0; i < props.numSideReactions; i++) {
                if (props.sideReactions[i].tempOnset === '')
                    continue

                // temperature onset
                if (!isNaN(Number(props.sideReactions[i].tempOnset))) {
                    if (Number(props.reactionInfo.finalTemp) > Number(props.sideReactions[i].tempOnset) ) {
                        arr.push(<><span style={style.alert}>Final temp exceeds side reaction {i + 1} temperature onset</span><br/></>)
                    }
                }
            }
        }

        // valid final pressure
        // if (!isNaN(props.reactionInfo.adiabaticPressure)) {
        //     for (let i = 0; i < props.numSideReactions; i++) {
        //         if (props.sideReactions[i].pressureOnset === '')
        //             continue

        //         // pressure onset
        //         if (!isNaN(Number(props.sideReactions[i].pressureOnset))) {
        //             if (Number(props.reactionInfo.adiabaticPressure) > Number(props.sideReactions[i].pressureOnset) ) {
        //                 arr.push(<><span style={style.alert}>Final pressure exceeds side reaction {i + 1} pressure onset</span><br/></>)
        //             }
        //         }
        //     }
        // }

        return arr
    }

    const reactants = compareReactants()
    const products = compareProducts()
    const diluents = compareDiluents()
    const sideReactions = compareSideReactions()

    // no alerts
    if (reactants.length !== 0 && products.length !== 0 && diluents.length !== 0 && sideReactions.length !== 0)
        return null


    return (
        <div className='Alert' style={style.main} >
            <h4>Alerts</h4>

            { reactants.length !== 0 
            &&
            <><br/><div>Reactant Alerts</div></>
            }
            {reactants}

            { products.length !== 0 
            &&
            <><br/><div>Product Alerts</div></>
            }
            {products}

            { diluents.length !== 0 
            &&
            <><br/><div>Diluent Alerts</div></>
            }
            {diluents}

            { sideReactions.length !== 0 
            &&
            <><br/><div>Diluent Alerts</div></>
            }
            {sideReactions}
            
        </div>
    )
}

const style = {
    main: {
        padding: '1rem',
        paddingTop: '2rem',
        width: '100vw',
        textAlign: 'center',
    },

    alert: {
        color: '#c71e1e'
    }
}

const mapStateToProps = state => ({
    reactionInfo: state.report.reactionInfo,
    reactants: state.compound.reactants,
    products: state.compound.products,
    diluents: state.compound.diluents,
    sideReactions: state.operatingParams.sideReactions,

    numReactants: state.compound.numReactants,
    numProducts: state.compound.numProducts,
    numDiluents: state.compound.numDiluents,
    numSideReactions: state.operatingParams.numSideReactions,
    
})

export default connect(mapStateToProps)(Alert)