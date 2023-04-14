import React from "react"
import ReactDOM from "react-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <h1>hello everyone</h1>
</React.StrictMode>)

const page = (
    <div>
        <h1>my website</h1>
        <h3>why react</h3>
        <ol>
            <li>composable</li>
            <li>declarative</li>
            <li>hireable skill</li>
        </ol>
    </div>
)

let node1 = document.createElement("div");
root.append(node1);
const node1_dom = ReactDOM.createRoot(document.getElementById("node1"));
node1_dom.render(page);