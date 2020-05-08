import { createStore, applyMiddleware, compose } from "redux";
import reduxSaga from 'redux-saga';

function reducers() {
    return {
        testing: ''
    };
}

const store = createStore(
    reducers,
    compose(applyMiddleware(reduxSaga()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())   
)
export default store;
/* export defdault () => {
    return {
        ...createStore(reducers, applyMiddleware(reduxSaga()))
    }
} */