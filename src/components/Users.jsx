import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";
import UsersList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchField: ""
    };
  }

  userSearch = (e) => {
    e.preventDefault();
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <Search userSearch={this.userSearch} handleSearch={this.handleSearch} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default Users;
