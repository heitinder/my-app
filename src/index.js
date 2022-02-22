import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clock from "./components/Clock/Clock";
import ListContainer from "./components/List/ListContainer";
import Todo from "./components/Todo/TodoContainer/TodoContainer";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="clock" element={<Clock />} />
      <Route path="list" element={<ListContainer />} />
      <Route path="todo" element={<Todo />} />
    </Routes>
    <React.StrictMode></React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
