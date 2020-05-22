import { START_GET_SAVED_STORIES, SUCCESS_GET_SAVED_STORIES, FAILED_GET_SAVED_STORIES } from '../actions/readAction';

const initialState = {
    saved_stories: [],
    error: null,
    loading: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case START_GET_SAVED_STORIES:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_GET_SAVED_STORIES:
            return {
                ...state,
                saved_stories: action.payload,
                loading: false
            }
        case FAILED_GET_SAVED_STORIES:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}