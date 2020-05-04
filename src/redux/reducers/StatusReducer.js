// The status of the calculation -
// whether or not the calculate button has been pressed
// and which aspects of the calculation are complete
import Types from '../actions/types'

const initialState = {
    calculationInProgress: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (Types.CALCULATION_IN_PROGRESS):
            return {
                ...state,
                calculationInProgress: true,
            }
        
        case (Types.CALCULATION_COMPLETE):
            return {
                ...state,
                calculationInProgress: false,
            }
            
        default:
            return state
    }
}
