import { put, takeLatest } from 'redux-saga/effects'
import { START_GET_STORIES, SUCCESS_GET_STORIES, START_GET_ALL_STORIES, SUCCESS_GET_ALL_STORIES, FAILED_GET_ALL_STORIES, SUCCESS_NEW_STORIE, START_NEW_STORIE, FAILED_NEW_STORIE } from '../actions/storieAction'; 
import axios from 'axios';
//import clientAxios from '../config/axios';
function* getStories(payload) {
    console.log(payload)
    const { userid } = payload;
    try {
        const stories = yield axios.get(`http://localhost:5000/storie/user/${userid}`)
            .then(response => response.data)
            .catch(error => console.log(error))
        yield put({ type: SUCCESS_GET_STORIES, payload: stories});
    } catch (error) {
        console.log(error)
    }
}

function* getAllStories() {
    console.log('Entro al saga')
    try {
        const stories = yield axios.get('http://localhost:5000/stories')
                                        .then(response => response.data)
                                        .catch(error => console.log(error))
        yield put({ type: SUCCESS_GET_ALL_STORIES, payload: stories})
    } catch (error) {
        yield put({ type: FAILED_GET_ALL_STORIES })
    }
}

function * saveNewStorie(action) {
    const { history, payload } = action;
    try {
        yield axios.post('http://localhost:5000/storie', payload)
        yield put({ type: SUCCESS_NEW_STORIE })
        history.push("/")
    } catch (error) {
        yield put({ type: FAILED_NEW_STORIE })
    }
}
// watchers
export default function* stories() {
    yield takeLatest(START_GET_STORIES, getStories)
    yield takeLatest(START_GET_ALL_STORIES, getAllStories)
    yield takeLatest(START_NEW_STORIE, saveNewStorie)
}
