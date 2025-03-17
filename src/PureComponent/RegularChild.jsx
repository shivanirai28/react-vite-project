// ! ======= Pure component (CBC)=========

/*
import { Component } from 'react'

 class RegularChild extends Component {
  render() {
    console.log("I am Regular Child");
    return (
      <>
        <h1>I am Regular Child component</h1>
      </>
    )
  }
}
export default RegularChild;
*/
// ! ======= Pure component (FBC)=========
import React from 'react'

const RegularChild = () => {
    console.log("RegularChild");
  return (
    <h2> I am Regular child</h2>
  )
}

export default RegularChild;
