import React from "react";

function Button(props) {
  return <button>{props.isLoggedIn ? "Login" : "Register"}</button>;
}

export default Button;
