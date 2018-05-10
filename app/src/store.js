import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import rootReducer from './reducers/index';

const intitalState = [];

const middleWare = [thunk];

const store = createStore(
    rootReducer, // Combined reducers
    intitalState, // initialState
    compose(
        applyMiddleware(...middleWare), // Enhancer functions
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
