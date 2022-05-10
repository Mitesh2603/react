import React, { useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alter ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alter ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push("red"); //classes = ['red']
  }
  if (props.personsLength <= 1) {
    classes.push("bold"); //classes = ['red', 'bold' ]
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}> This is really working here</p>
      <StyledButton alter={props.showPersons} onClick={props.clicked}>
        Toggle Persons
      </StyledButton>
    </div>
  );
};

export default Cockpit;
