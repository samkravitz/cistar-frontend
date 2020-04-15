import { combineReducers } from 'redux'

import CompoundReducer from './CompoundReducer'

const rootReducer = () => combineReducers({
    compound: CompoundReducer,
})

export default rootReducer