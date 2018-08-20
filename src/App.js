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
            Chef Jenny, Personal Chef <br />
            <span style={{ fontSize: 36 }}>
              <i>Live your life with a little spice! </i>
            </span>
          </h1>
        </header>
        <p className="App-intro">
          <i>...I love making great food for great people!</i>
        </p>
      </div>
    );
  }
}

export default App;
