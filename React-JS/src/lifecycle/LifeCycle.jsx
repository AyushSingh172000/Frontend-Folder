import { Component } from "react";
export default class LifeCycle extends Component {
  constructor() {
    super();
    console.log("I am constructor");
    this.state = { value: 0 };
  }

  componentDidMount() {
    console.log("Mounting Phase");
    this.s1 = setInterval(() => {
      console.log("Hello");
    }, 2000);
  }
  
  componentDidUpdate() {
    console.log("Updating Phase");
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log("before Update state was ", state);
    return null;
  }

  componentWillUnmount() {
    console.log("Unmounting Phase",this);
    clearInterval(this.s1);
  }
  render() {
    console.log("I am render");

    return (
      <div>
        <h1>Learn LifeCycle Methods {this.state.value}</h1>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          click
        </button>
      </div>
    );
  }
}
