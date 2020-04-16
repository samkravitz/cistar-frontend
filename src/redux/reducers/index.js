import { combineReducers } from 'redux'

import CompoundReducer from './CompoundReducer'
import OperatingParamsReducer from './OperatingParamsReducer'
import ReportReducer from './ReportReducer'

const rootReducer = () => combineReducers({
    compound: CompoundReducer,
    operatingParams: OperatingParamsReducer,
    report: ReportReducer,
})

export default rootReducer