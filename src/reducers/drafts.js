import { START_GET_DRAFTS, SUCCESS_GET_DRAFTS, FAILED_GET_DRAFTS} from "../actions/draftAction"

const initialState = {
    drafts: [],
    error: null,
    loading: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case START_GET_DRAFTS:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_GET_DRAFTS:
            return {
                ...state,
                loading: false,
                drafts: action.payload
            }
        case FAILED_GET_DRAFTS:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}