import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;
const style = {
  "@media(min-width: 500px)": {
    width: "450px",
  },
};

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering..");
    return (
      <Aux>
        <StyledDiv>
          <p onClick={this.props.click}>
            I'm a {this.props.name} and I am {this.props.age} years old.
          </p>
          <p key="i2">{this.props.children}</p>
          <input
            key="i3"
            // ref={(inputEl) => {
            //   this.inputElement = inputEl;
            // }}
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </StyledDiv>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
};

export default Person;
