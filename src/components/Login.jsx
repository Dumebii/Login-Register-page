import React from "react";
import Button from "./Button";
import Input from "./Input";

function Login(props) {
  return (
    <div>
      <h1>Hello</h1>
      <form className="form">
        <Input type="text" placeholder="Usernmae" />
        <Input type="password" placeholder="Password" />
        {!props.isLoggedIn && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <Button />
      </form>
    </div>
  );
}

export default Login;
