import USER_ACTION_TYPE from "./user.action.types";

export const fetchUsers = () => {
  console.log("*******user.actin**** ");

  return {
    type: USER_ACTION_TYPE.FETCH_USERS,
  };
};

export const fetchUserSuccess = (users) => {
  console.log("*******user.actin**** success");
  console.log(users);
  return {
    type: USER_ACTION_TYPE.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFail = (error) => {
  console.log("*******user.actin**** fail");
  return {
    type: USER_ACTION_TYPE.FETCH_USER_FAIL,
    payload: error,
  };
};

export const postUsers = (users) => {
  console.log("*******user.actin**** ");

  return {
    type: USER_ACTION_TYPE.POST_USERS,
  };
};

export const postUsersSuccess = (users) => {
  console.log("*******user.actin**** success");
  console.log(users);
  return {
    type: USER_ACTION_TYPE.POST_USERS_SUCCESS,
    payload: users,
  };
};

export const postUsersFail = (error) => {
  console.log("*******user.actin**** fail");
  return {
    type: USER_ACTION_TYPE.POST_USER_FAIL,
    payload: error,
  };
};
