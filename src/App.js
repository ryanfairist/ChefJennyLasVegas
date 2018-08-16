import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">
            Chef Jenny <br />
            <span style={{ fontSize: 36 }}>
              <i>I love making great food for great people!</i>
            </span>
          </h1>
        </header>
        <p className="App-intro">Personal Chef at your service.</p>
      </div>
    );
  }
}

export default App;
