import { START_LOGIN, SUCCESS_LOGIN, FAILED_LOGIN } from "../actions/authAction";
import { takeLatest, put } from "redux-saga/effects";

function* startLogin(obj) {
    console.log(obj);
    console.log('Hola');
    try {
        yield put({ type: SUCCESS_LOGIN })
    } catch (error) {
        yield put({ type: FAILED_LOGIN })
    }
}
// watchers
export default function* auth() {
    yield takeLatest(START_LOGIN, startLogin)
}