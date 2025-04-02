// ! ======= Pure component (CBC)=========

/*

import { Component } from "react";
import PureChild from "./PureChild";
import RegularChild from "./RegularChild";

class PureParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    console.log("I am PureParent ");
    return <>
        <h1>PureParent</h1>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
            counter
        </button>
        <PureChild />
        <RegularChild />
    </>;
  }
}

export default PureParent;
*/
// ! ======= Pure component (FBC)=========
/*
import React, { useState } from "react";
import RegularChild from "./RegularChild";
import PureChild from "./PureChild";

const PureParent = () => {
  console.log("I am PureParent ");

  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>I am Pure Parent</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
      <RegularChild />
      <PureChild />
    </>
  );
};

export default PureParent;
*/
