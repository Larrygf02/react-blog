import { put, call, takeLatest } from 'redux-saga/effects'
import { START_GET_STORIES } from '../actions/storieAction'; 
function* getStories({ payload }) {
    try {
        console.log('La funcion esta escuchando')
    } catch (error) {
        
    }
}

// watchers
export default function* stories() {
    yield takeLatest(START_GET_STORIES, getStories);
}