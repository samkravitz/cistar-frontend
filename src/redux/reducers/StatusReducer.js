// The status of the calculation -
// whether or not the calculate button has been pressed
// and which aspects of the calculation are complete
import Types from '../actions/types'

const initialState = {
    calculationInProgress: false,
    reportComplete: false,
    calculationBlockComplete: false,
    hazardMatrixComplete: false,
    cameoTableComplete: false,
    modalOpen: false,
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

        case (Types.REPORT_COMPLETE):
            return {
                ...state,
                reportComplete: true,
            }

        case (Types.HAZARD_MATRIX_COMPLETE):
            return {
                ...state,
                hazardMatrixComplete: true,
            }

        case (Types.CALCULATION_BLOCK_COMPLETE):
            return {
                ...state,
                calculationBlockComplete: true,
            }

        case (Types.CAMEO_TABLE_COMPLETE):
            return {
                ...state,
                cameoTableComplete: true,
            }

        case (Types.OPEN_MODAL):
            return {
                ...state,
                modalOpen: true,
            }

        case (Types.CLOSE_MODAL):
            return {
                ...state,
                modalOpen: false,
            }

        default:
            return state
    }
}
