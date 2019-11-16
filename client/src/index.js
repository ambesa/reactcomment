import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// IMPORTINGREACT DOM AND IMPORTING THE APP FUNCTION FROM APP.JS
// AND RENDERING APP FUNCTION AND CLALLING THE REGISTER SERVICE WORKER FUNCTION

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
