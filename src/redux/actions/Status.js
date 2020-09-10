import Types from './types'

// cpMix will either be false or the value of cp mix in the operating params
export const toggleModal = () => {
    return async (dispatch, getState) => {
        // modal is open, so close it
        if (getState().status.modalOpen) {
            dispatch({ type: Types.CLOSE_MODAL })
        } else { // modal is closed, so open it
            dispatch({ type: Types.OPEN_MODAL })
        }
    }
}