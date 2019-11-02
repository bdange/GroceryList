import React, { Component } from "react";
import AppNavBar from "./components/AppNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import GroceryList from "./components/GroceryList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      token: localStorage.getItem("token")
    };
  }

  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <AppNavBar />
        {this.state.token ? <GroceryList /> : null}
        <br />
        {this.state.token ? null : <Login />}
        <br />
        {this.state.token ? null : <Register />}
      </div>
    );
  }
}

export default App;
