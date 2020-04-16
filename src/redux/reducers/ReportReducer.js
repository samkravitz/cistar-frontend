// Reducer for the report: general calculations, hazard statement table, hazard matrix
import Types from '../actions/types'
import produce from 'immer'

const initialState = {
    matrix: [],
}

export default (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        

        default:
            return
    }
})
