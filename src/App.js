import { Link} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Clock from "./components/Clock/Clock";
import ListContainer from "./components/List/ListContainer";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //    <Hello/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Hello/>
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Home</Link>
        <Link to="/clock">Clock</Link>
        <Link to="/list">List</Link>
      </nav>
      <br />

    </>
  );
}

export default App;
