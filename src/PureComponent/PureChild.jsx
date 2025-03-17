// ! ======= Pure component (CBC)=========
/*
import { PureComponent } from 'react'

class PureChild extends PureComponent {
  render() {
    console.log("I am PureChild ");
    return (
      <>
       <h1> I am Pure Child Component</h1> 
      </>
    )
  }
}
export default PureChild;
*/
// ! ======= Pure component (FBC)=========
import React from 'react'

const PureChild = () => {
    console.log("PureChild");
  return (
    <h2> I am PureChild</h2>
  )
}

export default React. memo(PureChild);
