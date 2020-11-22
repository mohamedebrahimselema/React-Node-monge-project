import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No users found</h1>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.place}
        />
      ))}
    </ul>
  );
};

export default UserList;
