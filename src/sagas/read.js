import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { START_GET_SAVED_STORIES, SUCCESS_GET_SAVED_STORIES, FAILED_GET_SAVED_STORIES } from "../actions/readAction";

function* getSavedStories() {
    try {
        const savedHistories = yield axios.get("http://localhost:5000/user/storie/favorites/3")
        console.log(savedHistories);
        yield put({ type: SUCCESS_GET_SAVED_STORIES })
    } catch (error) {
        yield put({ type: FAILED_GET_SAVED_STORIES })
    }
}

// watchers
export default function* read() {
    yield takeLatest(START_GET_SAVED_STORIES, getSavedStories)
}