import download from 'downloadjs'
import { store } from './index'

// saving a reaction takes the title and location as a parameter because everything else
// is imported from the store.
export const save = (title, location) => {
    // current state
    const state = store.getState()
    
    const data = JSON.stringify({
        title: title,
        location: location,
        ...state
    })
    download(new Blob([...data]), title + '.json', 'text/json')
}

export const load = () => {
    
}