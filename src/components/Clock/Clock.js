import { React, Component } from "react";
import "./Clock.css";

const Timer = (props) => <p>{props.greeting}</p>  // dumb compnennt, functional compnent, statelss compnent

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      greeting: 'Hello Welcome to react'
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="clock-container">
        <h1> Clock </h1>
        <Timer greeting={this.state.greeting}></Timer>
      </div>
    );
  }
}

export default Clock;
