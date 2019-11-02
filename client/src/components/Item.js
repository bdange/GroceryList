import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Item extends Component {
  state = {
    modal: false,
    name: "",
    _id: this.props.id,
    isCompleted: this.props.isCompleted
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ name: e.target.value, _id: this.props.id });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
      _id: this.state._id,
      isCompleted: this.state.isCompleted
    };

    this.props.onEditClick(newItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <label for="purchased">Purchased: </label>
        <input
          id="purchased"
          type="checkbox"
          checked={this.props.isCompleted}
          onChange={this.props.toggleComplete}
          style={{ marginRight: "3rem", marginLeft: "1rem" }}
        />
        <span style={{ marginRight: "3rem" }}>{this.props.name}</span>
        <Button
          style={{ marginRight: ".5rem" }}
          color="danger"
          size="sm"
          onClick={this.props.onDeleteClick}
        >
          Delete
        </Button>
        <Button color="primary" size="sm" onClick={this.toggle}>
          Edit Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={e => this.onSubmit(e)}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="New Item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Save
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Item;
