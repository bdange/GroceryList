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

class ItemModal extends Component {
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
        <Button color="primary" onClick={this.toggle} size="sm">
          Edit Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Item</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="New Item"
                onChange={this.onChange}
              ></Input>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Save
              </Button>
            </FormGroup>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ItemModal;
