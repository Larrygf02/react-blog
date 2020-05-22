import axios from "axios"
import { put, takeLatest } from "redux-saga/effects"
import { START_GET_DRAFTS, SUCCESS_GET_DRAFTS, FAILED_GET_DRAFTS } from "../actions/draftAction"
function* getDrafts(payload) {
    const { userid } = payload;
    try {
        const drafts = yield axios.get(`http://localhost:5000/draft/user/${userid}`)
                                .then(response => response.data)
                                .catch(error => console.log(error))
        yield put({ type: SUCCESS_GET_DRAFTS, payload: drafts });
    } catch (error) {
        yield put({ type: FAILED_GET_DRAFTS })
    }
}

// watchers
export default function* drafts() {
    yield takeLatest(START_GET_DRAFTS, getDrafts)
}