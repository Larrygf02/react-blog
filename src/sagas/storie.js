import { put, takeLatest } from 'redux-saga/effects'
import { START_GET_STORIES, SUCCESS_GET_STORIES, START_GET_ALL_STORIES, SUCCESS_GET_ALL_STORIES, FAILED_GET_ALL_STORIES } from '../actions/storieAction'; 
import axios from 'axios';
//import clientAxios from '../config/axios';

function* getStories({ payload }) {
    console.log('Entro stories');
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

function* getAllStories() {
    console.log('Entro al saga')
    try {
        const stories = yield axios.get('http://localhost:5000/stories')
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
    yield takeLatest(START_GET_STORIES, getStories)
    yield takeLatest(START_GET_ALL_STORIES, getAllStories)
}
