import { addUsers, watchUser } from "./user.index";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchUser(), addUsers()]);
}
