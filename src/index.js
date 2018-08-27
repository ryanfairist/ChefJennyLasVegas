import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counter from "./components/counter";
import Weekly from "./components/Weekly";
/*import HowTo from "./components/HowTo";*/
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root1"));
ReactDOM.render(<Weekly />, document.getElementById("weekUpdate"));
//ReactDOM.render(<HowTo />, document.getElementById("howTo"));
ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
