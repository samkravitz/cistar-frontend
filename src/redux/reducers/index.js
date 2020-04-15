import { combineReducers } from 'redux'

import CompoundReducer from './CompoundReducer'
import OperatingParamsReducer from './OperatingParamsReducer'

const rootReducer = () => combineReducers({
    compound: CompoundReducer,
    operatingParams: OperatingParamsReducer,
})

export default rootReducer