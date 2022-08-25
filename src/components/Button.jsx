import React from "react";

function Button(props) {
  
   const [isHoverEffect, setHoverEffect] = React.useState(false);



  function setHover() {
    setHoverEffect(true);
  }
  function setHover2() {
    setHoverEffect(false);
  }

  return <button style={{backgroundColor: isHoverEffect? "white" : "black"}} onMouseOver={setHover} onMouseOut={setHover2}>{props.isLoggedIn ? "Login" : "Register"}</button>;
}

export default Button;
