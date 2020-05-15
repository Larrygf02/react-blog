import { START_LOGIN, SUCCESS_LOGIN, FAILED_LOGIN } from "../actions/authAction";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
const headers = {
    'Content-Type': 'application/json',
}
//import clientAxios from "../config/axios";

function* startLogin(payload) {
    console.log(payload);
    const { nickname, password } = payload;
    const data = yield axios.post('http://localhost:4000/login', { nickname, password}, { headers })
                                .then(response => response)
                                .catch(error => console.log(error))
    console.log(data);
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