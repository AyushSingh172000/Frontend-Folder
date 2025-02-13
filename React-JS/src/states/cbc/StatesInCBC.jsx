import { Component } from "react";

class StatesInCBC extends Component {
  state = { count: 0 }; // initializing state

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>State in Class Based </h1>
        <h2>
          Counter <mark>{this.state.count}</mark>
        </h2>

        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
export default StatesInCBC;
