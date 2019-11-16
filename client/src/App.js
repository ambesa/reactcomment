import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// IMPORTING REACT FROM REACT DOM 
// AND IMPORTING JS  FILES LIKE NOMATCH, SAVED AND HOME 
// FROM DIFFERENT FOLDERS AND IMPORTINNG AT LAST NAV COMPENENT FROM NAV FOLDER

function App() {
  // CREATING FUNCTION APP AND RETURNING ROUTER CLASS
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// EXPORTING THE APP FUNCTION 

export default App;
