// import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../service/service.manager";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/user/user.action";
import { getUsersList } from "../store/user/user.selector";
import { postUsers } from "../store/user/sagas/user.saga";

export default function Home() {
  const dispatch = useDispatch();

  const reduxUser = useSelector(getUsersList);
  console.log("*****Hom component******");
  console.log(reduxUser);
  console.log(reduxUser);
  console.log(reduxUser);

  const onClickHandler = (e) => {
    dispatch(fetchUsers());

    console.log("*****Hom component******");
    console.log(reduxUser);
    console.log(reduxUser);
    console.log(reduxUser);
  };

  const onPostClickHandler = (e) => {
    const newData = [
      {
        id: 111,
        name: "testname",
        username: "testusername",
        email: "testemail",
        adress: {
          street: "sdfsfd",
          suite: "Apt. 556",
          city: "Grew",
          zipcode: "sdfsdf",
          geo: null,
        },
      },
    ];

    dispatch(postUsers(newData));

    console.log("*****Hom component******");
    console.log(reduxUser);
    console.log(reduxUser);
    console.log(reduxUser);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={onClickHandler}>
          Get Users
        </button>
        <button type="button" onClick={onPostClickHandler}>
          Get Users
        </button>
        <div>User Redux</div>
        {reduxUser.loading ? (
          "loading....."
        ) : (
          <div>
            {reduxUser.users.map((user) => (
              <div key={user.id}>{user.name + " " + user.username}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
