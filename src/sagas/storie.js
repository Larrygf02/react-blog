import { put, takeLatest } from 'redux-saga/effects'
import { START_GET_STORIES, SUCCESS_GET_STORIES } from '../actions/storieAction'; 
import axios from 'axios';

function* getStories({ payload }) {
    try {
        console.log('La funcion esta escuchando')
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

// watchers
export default function* stories() {
    yield takeLatest(START_GET_STORIES, getStories);
}
