import { SUCCESS_LOGIN } from "../actions/authAction"
const initialState = {
    user: localStorage.user ? JSON.parse(localStorage.user) : null,
    isAuthenticated: localStorage.user ? true : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        default:
            return state
    }
}