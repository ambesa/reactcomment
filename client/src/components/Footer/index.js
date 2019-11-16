import React from "react";
// importing react dom 
// making footer function

function Footer() {
  // returning function footer class name footer pullright
  // retuning another class name fab fa-github
  // RETURNING A PARAGRAPH PROUDLY BUILT BY REACT
  return (
    
    <footer>
      
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}
// exporting the footer function 

export default Footer;
