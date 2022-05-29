// import Api from "../../service/service.manager";
import USER_ACTION_TYPE from "./user.action.types";

const INITIAL_USERS_STATE = {
  data: {
    users: [],
    error: null,
    loading: true,
  },
};

const fetchUsersSuccess = (state, action) => {
  console.log("****userReducer success*****");
  console.log(action.payload);
  return {
    ...state,

    data: {
      users: action.payload,
      error: null,
      loading: false,
    },
  };
};

const fetchUsersFail = (state, action) => {
  return {
    ...state,
    users: action.payload.users,
    loading: false,
  };
};

const postUsersSuccess = (state, action) => {
  console.log("****userReducer success*****");
  console.log(action.payload);
  return {
    ...state,

    data: {
      users: action.payload,
      error: null,
      loading: false,
    },
  };
};

const postUsersFail = (state, action) => {
  return {
    ...state,
    users: action.payload.users,
    loading: false,
  };
};

export const userReducer = (state = INITIAL_USERS_STATE, action) => {
  const { type } = action;

  console.log("****userReducer*****");
  console.log(action);

  switch (type) {
    case USER_ACTION_TYPE.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case USER_ACTION_TYPE.FETCH_USERS_FAIL:
      return fetchUsersFail(state, action);
    case USER_ACTION_TYPE.POST_USERS_SUCCESS:
      return postUsersSuccess(state, action);
    case USER_ACTION_TYPE.POST_USER_FAIL:
      return postUsersFail(state, action);
    default:
      return state;
  }
};
