import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "mohamed selema ",
      image: "https://miro.medium.com/max/1200/1*HeUOgmhMg2bGqhTtbCju1w.png",
      places: 3,
    },
  ];
  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
};

export default Users;
