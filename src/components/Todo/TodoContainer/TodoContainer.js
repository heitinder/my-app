import { React, Component } from "react";
import TodoList from "../TodoList/TodoList";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: ["Workout", "Studying", "gardening"],
    };
  }

  render() {
    return (
      <div>
        <h4>TODO LIST</h4>
        <TodoList items={this.state.listItems}></TodoList>
      </div>
    );
  }
}

export default Todo;
