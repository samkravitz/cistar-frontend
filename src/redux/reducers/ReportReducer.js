// Reducer for the report: general calculations, hazard statement table, hazard matrix
import Types from '../actions/types'
import produce from 'immer'

const initialState = {
    matrix: [],
    hNums: {},
    cameoTable: '',
    cameoErrors: [],
    reactionInfo: {
        adiabaticTemp: '',
        finalTemp: '',
        adiabaticPressure: ''
    },
    calculationErrors: '',
    matrixErrors: '',
}

export default (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case (Types.SET_HNUMS):
            draft.hNums = action.payload
            return

        case (Types.SET_MATRIX):
            draft.matrix = action.payload
            return

        case (Types.SET_REACTION_INFO):
            draft.reactionInfo = action.payload
            return

        case (Types.SET_CAMEO_TABLE):
            draft.cameoTable = action.payload
            return

        case (Types.SET_CAMEO_ERRORS):
            draft.cameoErrors = action.payload
            return

        case (Types.SET_MATRIX_ERRORS):
            draft.matrixErrors = action.payload
            return

        case (Types.SET_CALCULATION_ERRORS):
            draft.calculationErrors = action.payload
            return

        default:
            return
    }
})
