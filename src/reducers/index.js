import { combineReducers } from "redux";
import storie from "./storie";
import drafts from "./drafts";
import auth from "./auth";
import read from "./read";

export default combineReducers({
    stories: storie,
    drafts: drafts,
    auth: auth,
    reading: read
})
