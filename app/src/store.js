import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import rootReducer from './reducers/index';

const intitalState = [];

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    intitalState,
    applyMiddleware(...middleWare)
);

export default store;
