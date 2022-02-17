import { React, Component } from "react";


import "./ListContainer.css";
import ListItems from "./ListItems/ListItems";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // state
    };
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
  render() {
    // renering
    return <ListItems items={this.state.items}></ListItems>
  }
}

export default ListContainer;
