import { takeEvery } from "redux-saga/effects";
import USER_ACTION_TYPE from "../user.action.types";
import { fetchUsers, postUsers } from "./user.saga";

export function* watchUser() {
  yield takeEvery(USER_ACTION_TYPE.FETCH_USERS, fetchUsers);
}

export function* addUsers() {
  yield takeEvery(USER_ACTION_TYPE.POST_USERS, postUsers);
}
