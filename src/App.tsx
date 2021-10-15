import React, { Component } from "react";
import { Form, Input } from "./Input";
import Number from "./Number";

interface IState {
  count: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = { count: 0, name: "" };

  add = () => {
    this.setState((curr) => ({ count: curr.count + 1 }));
  };

  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  render() {
    const { count, name } = this.state;

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={count} />
        <button onClick={this.add}>ADD</button>
      </div>
    );
  }
}

export default App;
