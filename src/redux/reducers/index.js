import { combineReducers } from 'redux'

import CompoundReducer from './CompoundReducer'
import OperatingParamsReducer from './OperatingParamsReducer'
import ReportReducer from './ReportReducer'
import StatusReducer from './StatusReducer'

const rootReducer = () => combineReducers({
    compound: CompoundReducer,
    operatingParams: OperatingParamsReducer,
    report: ReportReducer,
    status: StatusReducer,
})

export default rootReducer