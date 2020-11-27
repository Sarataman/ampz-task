import React from "react";

const UsersCard = (props) => {
  return (
    <div class="col-lg-6">
      <div class="card-body book-card">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <h4>{props.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
