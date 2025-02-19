//! ======= Counter Task using HOC ===========
import React from "react";
import HOC from "./HOC";

const ChildComponentA = ({
  counter,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div>
      <h2>I am child componentA</h2>
      <p>Count : {counter}</p>
      <button onClick={handleIncrement}>handleIncrement</button>
      <button onClick={handleReset}>handleReset</button>
      <button onClick={handleDecrement}>handleDecrement</button>
    </div>
  );
};
export default HOC(ChildComponentA);
