import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Axios from "axios";
import Item from "./Item";

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          _id: "",
          name: "",
          isCompleted: ""
        }
      ],
      newItemName: "",
      token: localStorage.getItem("token")
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    Axios.get("/api/items").then(res => {
      this.setState({
        items: res.data
      });
    });
  }

  handleChange(e) {
    this.setState({ newItemName: e.target.value });
  }

  addItem(e) {
    e.preventDefault();
    if (!this.state.newItemName) {
      return;
    }
    const newItem = { name: this.state.newItemName, isCompleted: false };
    const token = this.state.token;
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    Axios.post("/api/items", newItem, config)
      .then(res => {
        this.setState({
          items: [...this.state.items, newItem],
          newItemName: ""
        });
        this.getItems();
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  onDeleteClick(_id) {
    const token = this.state.token;
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    Axios.delete(`/api/items/${_id}`, config)
      .then(res => {
        this.getItems();
      })
      .catch(err => {
        console.log(err);
      });
  }

  onEditClick(item, _id) {
    const token = this.state.token;
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    Axios.put(
      `/api/items/${_id}`,
      {
        _id: item._id,
        name: item.name
      },
      config
    )
      .then(res => {
        this.getItems();
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  toggleComplete(index, item) {
    const items = this.state.items.slice();
    const completedItem = items[index];
    completedItem.isCompleted = completedItem.isCompleted ? false : true;
    const _id = item._id;
    const token = this.state.token;
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    Axios.put(
      `/api/items/${_id}`,
      {
        _id: item._id,
        name: item.name,
        isCompleted: item.isCompleted
      },
      config
    )
      .then(res => {
        this.getItems();
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App" style={{ maxWidth: "80%", marginLeft: "10%" }}>
        <ListGroup>
          <TransitionGroup className="grocery-list">
            {this.state.items.map((item, index) => (
              <CSSTransition key={item._id} timeout={500} classNames="fade">
                <ListGroupItem
                  key={index}
                  style={{ marginBotton: "0.5rem", textAlign: "center" }}
                >
                  <Item
                    key={index}
                    name={item.name}
                    id={item._id}
                    isCompleted={item.isCompleted}
                    toggleComplete={() => this.toggleComplete(index, item)}
                    onDeleteClick={() => this.onDeleteClick(item._id)}
                    onEditClick={item => this.onEditClick(item, item._id)}
                  />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
        <form onSubmit={e => this.addItem(e)}>
          <input
            type="text"
            value={this.state.newItemName}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default GroceryList;
