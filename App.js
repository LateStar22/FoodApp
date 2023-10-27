const heading = React.createElement("h1",{},"Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id : "parent"},
React.createElement("div",{id : "child"}),
[React.createElement("h1",{},"Iam react heading"),
React.createElement("h2",{},"Iam react heading")]);

root.render(parent);