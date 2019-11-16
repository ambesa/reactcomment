import React from "react";
// importing react dom
import "./style.css";
// importing stryle.css
//THIS FILE IS RESPONSIBLE FOR THE JUMBOTRON FUNCTION 
//  IT EXPPRTS THE FUNCTION JUMBOTRON WITH AN ARGUMENT 

function Jumbotron({ children }) {
  // creating function name jumbotron
  return <div className="jumbotron mt-4">{children}</div>;
  //returning jumbotron
}
// exporting jumbotron

export default Jumbotron;
