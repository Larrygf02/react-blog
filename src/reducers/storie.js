import { START_GET_STORIES, SUCCESS_GET_STORIES, START_GET_ALL_STORIES, SUCCESS_GET_ALL_STORIES, FAILED_GET_ALL_STORIES } from "../actions/storieAction"

const initialState = {
    stories: [],
    stories_to_you: [],
    error: null,
    loading: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case START_GET_STORIES:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_GET_STORIES:
            return {
                ...state,
                loading: false,
                stories: action.payload
            }
        case START_GET_ALL_STORIES:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_GET_ALL_STORIES:
            return {
                ...state,
                loading: false,
                stories_to_you: action.payload
            }
        case FAILED_GET_ALL_STORIES:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

