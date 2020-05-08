import { createStore, applyMiddleware, compose } from "redux";
import reduxSaga from 'redux-saga';
import rootSaga from "../sagas";

function reducers() {
    return {
        testing: ''
    };
}

const store = createStore(
    reducers,
    rootSaga,
    compose(applyMiddleware(reduxSaga()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())   
)
export default store;