//! ======= Counter Task using HOC ===========
 
import React from "react";
import { useState } from "react";

const HOC = Wrappercomponent => {
  return () => {
    let [counter, setCounter] = useState(0);

    let handleIncrement = () => {
      setCounter(counter + 1);
    };
    let handleReset = () => {
      setCounter(0);
    };

    let handleDecrement = () => {
      setCounter(counter - 1);
    };
    return (
      <Wrappercomponent
        counter={counter}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        handleIncrement={handleIncrement}
      />
    );
  };
};
export default HOC;
