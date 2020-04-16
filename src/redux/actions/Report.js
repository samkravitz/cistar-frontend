import axios from 'axios'
import server from '../../server'
import Types from './types'

// export const parseDiluentFile = (index, formData) => {
//     return async dispatch => {
//         try {
//             const response = await axios.post(`${server}/pdf`, formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             })
    
//             dispatch({ type: Types.SET_DILUENT, payload: { index: index, data: response.data } })
//         } catch (error) {
//             // Error 😨
//             const message = error.response ? error.response.data.error : error
//             dispatch({ type: Types.SET_DILUENT, payload: { index: index, data: {} } })
//             alert(message)
//         }
//     }
// }

// export const updateReactant = (index, reactant) => {
//     return dispatch => {
//         dispatch({ type: Types.SET_REACTANT, payload: { index: index, data: reactant } })
//     }
// }


