import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import logo from "./logo.png";
import "./App.css";

function App() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState({});
  function handlechange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
    console.log(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function Search(event) {
    event.preventDefault();
    alert("Searching");
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-logo" alt="Shecodes logo" />
        <form className="searchengine" onSubmit={Search}>
          <input className="inputbox" type="search" onChange={handlechange} />
          <Result result={result} />
        </form>

        <footer>Coded by Gagi Behrh</footer>
      </header>
    </div>
  );
}
export default App;
