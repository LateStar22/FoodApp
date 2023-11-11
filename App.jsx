import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id : "heading"},"Hello React");
// console.log(heading);

// JSX : Javascript Syntax Extension

// const jsxheading = <h1 id="heading">namaste orrangee react</h1>
// console.log(jsxheading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);


// React Component:

const title = () => (
  <h1 className="heading">namste JSX using react</h1>
);



// Function Component:

const number = 10000;

// function Bus() {
// //   return <div id="container">
// //     <h1>{title()}</h1>
// //     <h1>
// //       my name is JSX
// //     </h1>
// //     <h2>
// //       My nam is JAvascript
// //     </h2>
// //   </div>
// // }

const Car = (props) => (
  <div id="container">
    {title()}
    <h2 className="heading">Hi, I am a {props.color} apple!</h2>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color =  "red"/>);


//   class Car extends React.Component {
//     render() {
//       return <h2>Hi, I am a Car!</h2>;
//     }
//   }