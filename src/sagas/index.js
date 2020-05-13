import stories from "./storie";
import drafts from "./draft"
import auth from "./auth";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        stories(),
        drafts(),
        auth()
    ]);
}