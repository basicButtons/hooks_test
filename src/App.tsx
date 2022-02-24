import React from "react";
import Context from "./context"
import "./App.css";
import Login from "login/login"

function App() {
  return (
    <Context>
      <div className="App">
        <Login/>
      </div>
    </Context>
  );
}

export default App;
