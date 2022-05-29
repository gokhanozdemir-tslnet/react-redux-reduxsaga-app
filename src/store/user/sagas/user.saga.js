import { put, call } from "redux-saga/effects";
import Api from "../../../service/service.manager";
import {
  fetchUserFail,
  fetchUserSuccess,
  postUsersSuccess,
  postUsersFail,
} from "../user.action";

export function* fetchUsers(action) {
  try {
    console.log("******saga list******");
    const api = new Api();
    const response = yield call(api.getUserList);
    console.log("******saga list******");
    console.log(response.data);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFail(error));
  }
}

export function* postUsers(action) {
  try {
    const api = new Api();
    const response = yield api.addNewUser(action.payload);
    console.log("******saga update******");
    console.log(response.data);
    yield put(postUsersSuccess(response.data));
  } catch (error) {
    yield put(postUsersFail(error));
  }
}
