import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/AppNavbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import GroceryList from "./components/GroceryList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <div className="background">
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </section>
            <Container>
              <ItemModal />
              <GroceryList />
            </Container>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
