import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// import React from "react";
// import ReactDOM from "react-dom/client";

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964,
//     };
//   }
//   changeColor = () => {
//     this.setState({ color: "blue" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button type="button" onClick={this.changeColor}>
//           Change color
//         </button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// export default Car;

const Car = (props) => {
  const [change, setChange] = useState({
    Car: { brand: "Ford", model: "Mustang", color: "red", year: 1999 },
  });

  const changeColor = () => {
    setChange({
      Car: { brand: "Ford", model: "Mustang", color: "blue", year: 1999 },
    });
  };

  return (
    <div>
      <h1>My {change.Car.brand}</h1>
      <p>
        It is a {change.Car.color} {change.Car.model} from {change.Car.year}.
      </p>
      <button type="button" onClick={changeColor}>
        Change color
      </button>
    </div>
  );
};

export default Car;
