import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  
  const [isHoverEffect, setHoverEffect] = React.useState(false);



  function setHover() {
    setHoverEffect(true);
  }
  function setHover2() {
    setHoverEffect(false);
  }
  
  return (
    <div className="container">
      <Login />

      {/* {isLoggedIn ? (
        <Login />
      ) : (
        <h1 style={{ color: "black" }}>You already have an account!</h1>
      )} */}
    </div>
  );
}

export default App;
