import "./App.css";
import React from "react";
import { TrashOutline, PencilOutline, SaveOutline } from "react-ionicons";
import "antd/dist/antd.css";
import { Input, Button, Divider, Col, Row } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      error: false,
      readingList: [
        {
          id: 1,
          title: "Mobilność i elastyczność w treningu",
          description: "Dowiesz się o tym w jaki sposób odpowiednio elastyczne mięśnie wypywają na większą wydajność treningu i jego lepsze efekty treningowe.",
        },
        {
          id: 2,
          title: "Mobilność i elastyczność w treningu",
          description: "Dowiesz się o tym w jaki sposób odpowiednio elastyczne mięśnie wypywają na większą wydajność treningu i jego lepsze efekty treningowe.",
        },
        {
          id: 3,
          title: "Mobilność i elastyczność w treningu",
          description: "Dowiesz się o tym w jaki sposób odpowiednio elastyczne mięśnie wypywają na większą wydajność treningu i jego lepsze efekty treningowe.",
        },
      ],
      editModeId: null,
    };
  }

  onTitleChange = (event) => this.setState({ error: false, title: event.target.value });

  onDescriptionChange = (event) => this.setState({ description: event.target.value });

  onDeletePress = (element) => this.setState({ readingList: this.state.readingList.filter((x) => x.id != element.id) });

  onSaveElement = () => this.setState({ editModeId: null });

  onEditElement = (element) => this.setState({ editModeId: element.id });

  onAddPress = () => {
    const newElement = {
      title: this.state.title,
      description: this.state.description,
      id: this.state.readingList.length + 1,
    };

    if (newElement.title.length <= 0) {
      this.setState({ error: true });
    } else {
      this.setState({
        readingList: [...this.state.readingList, newElement],
        title: "",
        description: "",
      });
    }
  };

  onTitleEdit = (element, title) => {
    const updatedReadingList = this.state.readingList.map((x) => {
      if (x.id == element.id) {
        return {
          ...x,
          title: title,
        };
      } else {
        return x;
      }
    });
    this.setState({ readingList: updatedReadingList });
    // const updatedReadingList2 = this.state.readingList.map((x) =>
    //   x.id == element.id ? { ...x, title: title } : x
    // );
  };

  onDescriptionEdit = (element, description) => {
    const updatedReadingList = this.state.readingList.map((x) => {
      if (x.id == element.id) {
        return {
          ...x,
          description: description,
        };
      } else {
        return x;
      }
    });
    this.setState({ readingList: updatedReadingList });
  };

  render() {
    return (
      <Row>
        <Col span={16}>
          <h1>Lista książek do przeczytania</h1>

          {this.state.readingList.map((element, index) => {
            const isEditMode = this.state.editModeId == element.id;

            return (
              <>
                <li key={index}>
                  {isEditMode ? (
                    <>
                      <input onChange={(e) => this.onTitleEdit(element, e.target.value)} value={element.title} className="title" />
                      <input onChange={(e) => this.onDescriptionEdit(element, e.target.value)} value={element.description} className="opis" />
                      <SaveOutline onClick={this.onSaveElement} color={"#00000"} height="25px" width="25px" />
                    </>
                  ) : (
                    <>
                      <div className="title">{element.title}</div>
                      <div className="opis">{element.description}</div>
                      <PencilOutline onClick={() => this.onEditElement(element)} color={"#00000"} height="25px" width="25px" />
                    </>
                  )}
                  <TrashOutline onClick={() => this.onDeletePress(element)} color={"#00000"} height="25px" width="25px" />
                </li>
                <Divider />
              </>
            );
          })}
        </Col>

        <Col span={8}>
          <h1>Dodaj nową książkę</h1>

          <Input placeholder="Nazwa Twojej książki" value={this.state.title} onChange={this.onTitleChange} />

          {this.state.error ? <div style={{ color: "red" }}>Dodaj tytuł</div> : null}

          <Input.TextArea placeholder="Dlaczego warto przeczytać?" value={this.state.description} onChange={this.onDescriptionChange} />

          <Button type="primary" onClick={this.onAddPress}>
            Dodaj
          </Button>
        </Col>
      </Row>
    );
  }
}

export default App;
