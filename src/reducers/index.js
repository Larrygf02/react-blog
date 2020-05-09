import { combineReducers } from "redux";
import storie from "./storie";
import drafts from "./drafts";

export default combineReducers({
    stories: storie,
    drafts: drafts
})
