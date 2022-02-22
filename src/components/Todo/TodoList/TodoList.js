import { Button } from "@mui/material";
const TodoList = (props) => {
  return (
    <div class='App'>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}
           - <Button variant="contained" color="error">
        Delete
      </Button></li>
        ))}
      </ul>
      <input type='text' id='newItem'></input><br/>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
};

export default TodoList;