export const getUsersList = (state) => {
  console.log("selector");
  console.log(state.users);
  //state) => state.users.data
  return state.users.data;
};
