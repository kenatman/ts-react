import React, { Component } from "react";
import Number from "./Number";

interface IState {
  count: number;
}

class App extends Component<{}, IState> {
  state = { count: 0 };

  add = () => {
    this.setState((curr) => ({ count: curr.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <Number count={count} />
        <button onClick={this.add}>ADD</button>
      </div>
    );
  }
}

export default App;
