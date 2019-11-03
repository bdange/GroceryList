import React, { Component } from "react";
import Axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post("/api/users", newUser)
      .then(res => {
        console.log("CREATED USER");
        console.log(res);
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Register as first time user</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <div class="form-group">
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder={"Enter Email"}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder={"Enter Password"}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
