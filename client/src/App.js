import React from "react";
import AppNavBar from "./components/AppNavbar";
import GroceryList from "./components/GroceryList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <GroceryList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
