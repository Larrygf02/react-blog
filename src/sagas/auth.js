import { START_LOGIN, SUCCESS_LOGIN, FAILED_LOGIN, START_NEW_USER, SUCCESS_NEW_USER, FAILED_NEW_USER } from "../actions/authAction";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
const headers = {
    'Content-Type': 'application/json',
}
//import clientAxios from "../config/axios";

function* startLogin(action) {
    const { history, payload } = action;
    console.log(payload);
    const { nickname, password } = payload;
    const { is_login, user } = yield axios.post('http://localhost:5000/login', { nickname, password}, { headers })
                                .then(response => response.data)
                                .catch(error => console.log(error))
    if (is_login) {
        localStorage.user = JSON.stringify(user);
        yield put({ type: SUCCESS_LOGIN, payload: user })
        history.push("/")
    }else {
        yield put({ type: FAILED_LOGIN })
    }
}

function* newUser(action) {
    const { history, payload } = action
    //const { nickname } = payload;
    try {
        yield axios.post('http://localhost:5000/user', payload)
        yield put({ type: SUCCESS_NEW_USER })
        history.push("/login")
    }catch (error) {
        yield put({ type: FAILED_NEW_USER })
    }
}
// watchers
export default function* auth() {
    yield takeLatest(START_LOGIN, startLogin)
    yield takeLatest(START_NEW_USER, newUser)
}