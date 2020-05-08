import { createStore, applyMiddleware } from "redux";
import reduxSaga from 'redux-saga';

function reducers() {
    return {
        testing: ''
    };
}

export default () => {
    return {
        ...createStore(reducers, applyMiddleware(reduxSaga()))
    }
}