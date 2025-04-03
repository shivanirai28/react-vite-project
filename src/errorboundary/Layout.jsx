import React from "react";

const LoadingTask = (props) => {
  if (
    props.val !== "Loading" &&
    props.val !== "Success" &&
    props.val !== "error"
  ) {
    throw new Error("Something went worng");
  }
  console.log(props.val);
  return (
    <>
    <li style={{fontWeight: "bold", display: "flex",
          flexDirection: "column",
          padding: "25px",
          fontSize : "25px",
          justifyContent: "center",
          alignItems : "center",
          border : "4px solid green",
          width : "50%"
          }}>
    {" Hey user you data is "}{" "} {props.val}
    </li>
    </>
  );
};

export default LoadingTask;