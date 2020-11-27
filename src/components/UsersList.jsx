import React from "react";
import UsersCard from "./UsersCard";

const UsersList = (props) => {
  return (
    <div className="book-list">
      {props.users.map((user) => {
        return (
          <UsersCard
            key={user.id}
            image={
              "https://5starsloans.com/wp-content/uploads/2018/04/2019-08-21_13-45-18.png"
            }
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
