import { Link} from "react-router-dom";
import "./App.css";

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
        <Link to="/list">List</Link>
        <Link to='/todo'>TODO</Link>
      </nav>
      <br />

    </>
  );
}

export default App;
