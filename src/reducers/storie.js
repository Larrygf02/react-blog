import { START_GET_STORIES, SUCCESS_GET_STORIES } from "../actions/storieAction"

const initialState = {
    stories: [],
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
        default:
            return state
    }
}

