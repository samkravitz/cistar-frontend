// Reducer for the report: general calculations, hazard statement table, hazard matrix
import Types from '../actions/types'
import produce from 'immer'

const initialState = {
    matrix: [],
    hNums: {},
    reactionInfo: {},
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

        default:
            return
    }
})
