import React from "react";
//importing react dom 
  // crating function named card with arguments 
  // icon , children, tittle 
  // there are three clasees  inside the funtion 
  

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
// exporting card file 

export default Card;
