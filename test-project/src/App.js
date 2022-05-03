import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Mitesh", age: 20 },
      { name: "Meet", age: 18 },
      { name: "Prasahnt", age: 22 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    // DON'T DO THIS : this.state.persons[0].name = "MiteshMakwana";
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Meet", age: 18 },
        { name: "Prasahnt", age: 29 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mitesh", age: 20 },
        { name: event.target.value, age: 18 },
        { name: "Prasahnt", age: 29 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgoundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hello</h1>
        <p> this is really working here</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Mitesh!")}
              changed={this.nameChangedHandler}
            >
              My Hobbies: dancing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "It works")
  // );
}

export default App;
