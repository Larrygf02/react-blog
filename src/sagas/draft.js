import axios from "axios"
import { put, takeLatest } from "redux-saga/effects"
import { START_GET_DRAFTS, SUCCESS_GET_DRAFTS, FAILED_GET_DRAFTS } from "../actions/draftAction"
function* getDrafts() {
    try {
        const drafts = yield axios.get('http://localhost:5000/draft/user/3')
                                .then(response => response.data)
                                .catch(error => console.log(error))
        console.log(drafts)
        yield put({ type: SUCCESS_GET_DRAFTS, payload: drafts });
    } catch (error) {
        yield put({ type: FAILED_GET_DRAFTS })
    }
}

// watchers
export default function* drafts() {
    yield takeLatest(START_GET_DRAFTS, getDrafts)
}