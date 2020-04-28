import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(thunk)))

const Entrypoint = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Entrypoint />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
