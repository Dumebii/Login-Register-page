import React from "react";
import Input from "./Input";
import Button from "./Button";

function Register() {
  return (
    <div>
      <h1>Hello</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button />
    </div>
  );
}

export default Register;
