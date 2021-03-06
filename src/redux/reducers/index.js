import { combineReducers } from 'redux'

import CompoundReducer from './CompoundReducer'
import OperatingParamsReducer from './OperatingParamsReducer'
import ReportReducer from './ReportReducer'
import StatusReducer from './StatusReducer'
import RouteReducer from './RouteReducer'

const rootReducer = () => combineReducers({
    compound: CompoundReducer,
    operatingParams: OperatingParamsReducer,
    report: ReportReducer,
    status: StatusReducer,
    route: RouteReducer,
})

export default rootReducer