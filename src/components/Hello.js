import React from "react";
import "./Hello.css";
import Textfield from "./TextField/Textfield";

const Hello = () => {
  const students = ["Aman", "Jaskirat", "Onkar", "steve", "john"];
  return (
    <>
      <Textfield />
      <ul>
        {students.map((student, ind) => (
          <li key={ind}>{student}</li>
        ))}
      </ul>
    </>
  );
};
export default Hello;
