import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { START_GET_SAVED_STORIES, SUCCESS_GET_SAVED_STORIES, FAILED_GET_SAVED_STORIES, START_GET_ARCHIVED_STORIES, SUCCESS_GET_ARCHIVED_STORIES, FAILED_GET_ARCHIVED_STORIES } from "../actions/readAction";

function* getSavedStories(payload) {
    const { userid } = payload;
    try {
        const { data } = yield axios.get(`http://localhost:5000/user/storie/favorites/${userid}`)
        yield put({ type: SUCCESS_GET_SAVED_STORIES, payload: data })
    } catch (error) {
        yield put({ type: FAILED_GET_SAVED_STORIES })
    }
}

function* getArchivedStories(payload) {
    const { userid } = payload;
    try {
        const { data } = yield axios.get(`http://localhost:5000/user/storie/archiveds/${userid}`)
        yield put({ type: SUCCESS_GET_SAVED_STORIES, payload: data })
    } catch (error) {
        yield put({ type: FAILED_GET_ARCHIVED_STORIES })
    }
}

// watchers
export default function* read() {
    yield takeLatest(START_GET_SAVED_STORIES, getSavedStories)
    yield takeLatest(START_GET_ARCHIVED_STORIES, getArchivedStories)
}