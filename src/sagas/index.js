import stories from "./storie";
import drafts from "./draft"
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        stories(),
        drafts()
    ]);
}