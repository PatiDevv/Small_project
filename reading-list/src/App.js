import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { TrashOutline } from "react-ionicons";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h1>Lista książek do przeczytania</h1>
          <div className="list-wrapper">
            <ul>
              <li>
                <input type="checkbox" />
                <div className="title">Tytuł</div>
                <div className="opis">Opis</div>
                <TrashOutline color={"#00000"} height="25px" width="25px" />
              </li>
            </ul>
          </div>
        </div>

        <div className="form">
          <h1>Dodaj nową książkę</h1>
          <label>
            Książka
            <input type="text" />
          </label>
          <label>
            Dlaczego warto przeczytać?
            <textarea />
          </label>
          <button> Dodaj </button>
        </div>
      </div>
    );
  }
}

export default App;
