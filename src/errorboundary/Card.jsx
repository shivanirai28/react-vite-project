import React from "react";

const Card = (props) => {
  if (props.val.gender === "Male") {
    throw new Error("Something wents worng");
  }
  return (
    <center>
      <li
        style={{
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          justifyContent: "center",
          alignItems : "center"
        }}
      >
        {props.val.name} {" your gender is "} {props.val.gender} {" so you got selected "}
      </li>
    </center>
  );
};

export default Card;