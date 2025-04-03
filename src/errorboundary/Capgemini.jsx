import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Card from "./Card";


const Capgemini = () => {
  let data = [
    { name: "Keshav", gender: "Male" },
    { name: "Shivani", gender: "Female" },
    { name: "Pankaj", gender: "Male" },
    { name: "Kanika", gender: "Female" },
    { name: "Megha", gender: "Female" },
    { name: "Ramini", gender: "Female" },
    { name: "seema", gender: "Female" },
    { name: "sunita", gender: "Female" },
  ];

  return (
    <center>
      <h1>Capgemini task (Capgemini only hiring female's)</h1>

      {data.map((val, ind) => {
        return (
          <React.Fragment key={ind}>
            <ErrorBoundary
              fallback={
                <li style={{ color: "red", listStyleType: "none" }}>
                  ❌ oop's {val.name} is a male so , (Not selected) ❌
                </li>
              }
            >
              <ul
                style={{
                  listStyleType: "none",
                  border: "1px solid green",
                  width: "50%",
                }}
              >
                <Card val={val} />
              </ul>
            </ErrorBoundary>
          </React.Fragment>
        );
      })}
    </center>
  );
};

export default Capgemini;

