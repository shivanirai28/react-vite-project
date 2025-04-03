import React from 'react'

const useCalculator = (numberOne , numberTwo) => {

  return {
   inputOne: numberOne,
   inputTwo: numberTwo,
   addition: numberOne + numberTwo,
   subtraction: numberOne - numberTwo, 
   multiplication: numberOne * numberTwo,
   division: numberOne / numberTwo, 
  }
  
}

export default useCalculator