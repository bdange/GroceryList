import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: undefined
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.prevenDefault();
    const User = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post("/api/users/auth", User)
      .then(res => {
        console.log("user signed in");
        // console.log(res);
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
        <h2>Login to access your shared Shopping List</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder={"Enter your email"}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder={"Enter password"}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
