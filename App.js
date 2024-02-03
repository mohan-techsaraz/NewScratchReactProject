import React from "react";
import ReactDOM from "react-dom/client";
{/* 
<div id="parent">
    <div id="child">
        <h1>Hello I'm H1 Tag</h1>
        <h2>Hello I'm H2 Tag</h2>

    </div>
    <div id="child2">
        <h1>Hello I'm H1 Tag</h1>
        <h2>Hello I'm H2 Tag</h2>

    </div>
</div>
 */}

//First create the React Element

const parentDiv = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement('h1',{},'Hello Im H1 Tag'),React.createElement('h2',{},'Hello Im H2 Tag')]),React.createElement('div',{id:'child2'},[React.createElement('h1',{},'Hello Im H1 Tag'),React.createElement('h2',{},'Hello Im H2 Tag')])]);
//JSX

//We will create React Dom Node
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the React Element in the DOM Node
root.render(parentDiv);