/*
import React from "react";
import ReactDOM from "react-dom"

const PortalComponent = (props) => {
  console.log(props);

  let sectionStyles = {
    height: "95vh",
    width: "98vw",
    border: "solid red",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let artcleStyles = {
    border: "solid white",
    height: "70%",
    width: "30%",
  };

  return ReactDOM.createPortal(
    <>
      <section style={sectionStyles}>
        <article style={artcleStyles}>
          <h1 style={{color : "white"}}> Here you can do the Login ...</h1>
          <button
            onClick={props.closefn}
            style={{
              position: "fixed",
              top: "10px",
              right:"10px",
            }}
          >
            skip
          </button>
        </article>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default PortalComponent;
*/

// !====== task on portal ======

import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = (props) => {
  console.log(props);

  let sectionStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  };

  let artcleStyles = {
    backgroundColor: "white",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "400px",
    padding: "30px",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
    
  };
 

  return ReactDOM.createPortal(
    <>
      <section style={sectionStyles}>
        <article style={artcleStyles}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              marginLeft: "110px",

            }}
          >
            Login to ZEE5
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              margin: "0",
              lineHeight: "1.5",
              marginLeft: "80px",
            }}
          >
            Login to continue enjoying uninterrupted
            <br />
            video and personalised experience.
          </p>
          <br />
          <br />

          <div
           style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            gap: "15px",
            justifyContent: "center",
          }}>
            <img src="https://www.zee5.com/images/apple-social-icon-circle.svg?ver=4.17.2" alt="apple logo" />
            <img src="https://www.zee5.com/images/twitter-social-icon.svg?ver=4.17.2" alt=" twitter logo" />
            <img src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=4.17.2" alt="google logo" />
            <img src="https://www.zee5.com/images/fb-social-icon-circle.svg?ver=4.17.2" alt="facebook logo" />
          </div>
          

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "#ddd",
              }}
            ></div>
            <div
              style={{
                margin: "0 15px",
                color: "#666",
                fontSize: "14px",
                backgroundColor: "white",
                padding: "5px 10px",
                borderRadius: "50%",
                border: "1px solid #ddd",
              }}
            >
              or
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "#ddd",
              }}
            ></div>
          </div>
          <div style={{ margin: "20px 0" }}>
            <input
              type="text"
              placeholder="Enter email or mobile number"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "14px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#a278e8",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Login
          </button>
          <div
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#333",
            }}
          >
            New to ZEE5 ?{" "}
            <span style={{ color: "#a278e8", cursor: "pointer" }}>
              Register
            </span>
          </div>
          <button
            onClick={props.closefn}
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
            }}
          >
            skip
          </button>
        </article>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default PortalComponent;
