import { React, Component } from "react";

import "./ListContainer.css";
import ListItems from "./ListItems/ListItems";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // state
    };
    this.handleRowDelete = this.handleRowDelete.bind(this);
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp?.data) {
          this.updateItems(resp?.data);
        }
      });
  }

  updateItems(newItems) {
    this.setState({
      items: newItems,
    });
  }

  handleRowDelete(index) {
    console.log(index);
    let newItems = this.state.items;
    newItems.splice(index, 1);
    this.setState({
      items: newItems,
    });
  }
  render() {
    // renering
    return (
      <ListItems
        items={this.state.items}
        handleDeleteRow={this.handleRowDelete}
      ></ListItems>
    );
  }
}

export default ListContainer;
