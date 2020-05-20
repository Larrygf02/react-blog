import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import { START_GET_STORIES, SUCCESS_GET_STORIES, START_GET_ALL_STORIES, SUCCESS_GET_ALL_STORIES, FAILED_GET_ALL_STORIES } from '../actions/storieAction'; 
import axios from 'axios';
import clientAxios from '../config/axios';

function* getStories({ payload }) {
    try {
        const stories = yield axios.get('http://localhost:5000/storie/user/3')
            .then(response => response.data)
            .catch(error => console.log(error))
        console.log(stories)
        yield put({ type: SUCCESS_GET_STORIES, payload: stories});
        //const stories = yield call('http://localhost:5000/storie/user/3')
    } catch (error) {
        console.log(error)
    }
}


function* getAllStories({ payload }) {
    try {
        const stories = yield clientAxios.get('/stories')
                                        .then(response => response.data)
                                        .catch(error => console.log(error))
        console.log(stories);
        yield put({ type: SUCCESS_GET_ALL_STORIES, payload: stories})
    } catch (error) {
        yield put({ type: FAILED_GET_ALL_STORIES })
    }
}
// watchers

export default function* stories() {
    yield takeLatest(START_GET_STORIES, getStories);
    yield takeEvery(START_GET_ALL_STORIES, getAllStories);
}
