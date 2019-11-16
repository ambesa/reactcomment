import React from "react";
import "./style.css";

// This component exports both the List and ListItem components
// IT IMPOTS THE CSS FRIOM THE FOLDER 
// EXP[OPRT CONSTANT LIST WITH CHIULDREN]

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);
// EXPORTS FUNCTION NAMED LIST ITEM AND RETURNING THE CHILDREN 

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
