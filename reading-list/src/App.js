import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { TrashOutline } from "react-ionicons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      readingList: [
        {
          title: "Mobilność i elastyczność w treningu",
          description:
            "Dowiesz się o tym w jaki sposób odpowiednio elastyczne mięśnie wypywają na większą wydajność treningu i jego lepsze efekty treningowe.",
        },
        {
          title: "Mobilność i elastyczność w treningu",
          description:
            "Dowiesz się o tym w jaki sposób odpowiednio elastyczne mięśnie wypywają na większą wydajność treningu i jego lepsze efekty treningowe.",
        },
        {
          title: "Mobilność i elastyczność w treningu",
          description:
            "Dowiesz się o tym w jaki sposób odpowiednio elastyczne mięśnie wypywają na większą wydajność treningu i jego lepsze efekty treningowe.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h1>Lista książek do przeczytania</h1>

          <div className="list-wrapper">
            {this.state.readingList.map((element) => (
              <li>
                <input type="checkbox" />
                <div className="title">{element.title}</div>
                <div className="opis">{element.description}</div>
                <TrashOutline color={"#00000"} height="25px" width="25px" />
              </li>
            ))}
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
