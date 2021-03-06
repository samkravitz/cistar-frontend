import Types from '../actions/types'

const initialState = {
    route: 'HOME'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (Types.SET_HOME):
            return {
                ...state,
                route: 'HOME'
            }
        
        case (Types.SET_USER_GUIDE):
            return {
                ...state,
                route: 'USER_GUIDE'
            }
        
        case (Types.SET_PUBLICATIONS):
            return {
                ...state,
                route: 'PUBLICATIONS'
            }

        default:
            return state

    }
}