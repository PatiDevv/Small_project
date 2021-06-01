import { title } from "process";
import React from "react";
import { isTemplateSpan } from "typescript";
import "./App.css";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      toDoList: [
        { title: "Wyświetlanie", content: "wyswietlenie todolisty na stronie" },
        {
          title: "Dodawanie",
          content: "dodawanie nowych elementow do istniejacej listy",
        },
        { title: "Usuwanie", content: "usuwanie elementow z todo listy" },
      ],
    };
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onContentChange = (event) => {
    this.setState({ content: event.target.value });
  };

  onAddPress = () => {
    const newElement = { title: this.state.title, content: this.state.content };
    this.setState({
      toDoList: [...this.state.toDoList, newElement],
      title: "",
      content: "",
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <div className="list">
          <h1>Moja lista rzeczy do zrobienia</h1>
          {this.state.toDoList.map((listItem) => (
            <ListItem title={listItem.title} content={listItem.content} />
          ))}
        </div>

        <div className="form">
          <h1>Dodaj nowe zadanie</h1>
          <div className="form-wrapper">
            <label>
              Tytuł
              <input
                type="text"
                name="name"
                value={this.state.title}
                onChange={this.onTitleChange}
              />
            </label>

            <label>
              Treść
              <textarea
                value={this.state.content}
                onChange={this.onContentChange}
              ></textarea>
            </label>
            <button onClick={this.onAddPress}> Dodaj </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
