import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ListItems = (props) => {
  const handleDelte = props.handleDeleteRow;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.first_name}</TableCell>
              <TableCell align="right">{item.last_name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">
                <a href="#">
                  {" "}
                  <img alt={item.avatar} src={item.avatar}></img>
                </a>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  onClick={() => handleDelte(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ListItems;
