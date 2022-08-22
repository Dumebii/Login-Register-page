import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
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
