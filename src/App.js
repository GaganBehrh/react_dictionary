import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  let [keyword, setKeyword] = useState("");
  function handlechange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
    console.log(event.target.value);
  }
  function Search(event) {
    event.preventDefault();
    alert("Searching");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-logo" alt="Shecodes logo" />
        <form className="searchengine" onSubmit={Search}>
          <input className="inputbox" type="search" onChange={handlechange} />
        </form>
        <footer>Coded by Gagi Behrh</footer>
      </header>
    </div>
  );
}

export default App;
