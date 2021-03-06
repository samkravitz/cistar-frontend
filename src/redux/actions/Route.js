import Types from './types'

export const setHome = () => {
    return async (dispatch, getState) => {
        dispatch({ type: Types.SET_HOME })
    }
}

export const setUserGuide = () => {
    return async (dispatch, getState) => {
        dispatch({ type: Types.SET_USER_GUIDE })
    }
}

export const setPublications = () => {
    return async (dispatch, getState) => {
        dispatch({ type: Types.SET_PUBLICATIONS })
    }
}