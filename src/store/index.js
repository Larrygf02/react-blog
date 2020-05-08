import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";

function reducers() {
    return {
        testing: ''
    };
}
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())   
)
sagaMiddleware.run(rootSaga)
export default store;