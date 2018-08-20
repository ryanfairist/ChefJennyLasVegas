import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counter from "./components/counter";
import Weekly from "./components/weekly";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root1"));
ReactDOM.render(<Weekly />, document.getElementById("weekUpdate"));
ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
