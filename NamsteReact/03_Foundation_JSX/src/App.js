/**
 * JSX is not a part of react 
*/

import React from "react";
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement- JS object => HTMLElement(render)
const heading = React.createElement("h1",
    { id: "head" },
    "Hello from React");



// JSX -> Not html in js but HTML-like or XML-like syntax(transpiled - Babel)
// JSX -> React.createElement => ReactElement-JS object => HTMLElement

// const jsxHeading = <h1 id="head">React with JSX</h1>;

        // OR 

const jsxHeading = (
    <h1 id="head">
        React with JSX
    </h1>
);
// heading and jsxHeading is same in console.

// React component
const HeadingComponent = () => {
    return <h1 id="head">React with functional component</h1>;
}  

const HeadingComponent2 = () => (
    // you can write any js expression in {}
    <>
        { 2 + 2 }

        <h2>{ 2 + 2 }</h2>

        {console.log("lol")}

        {jsxHeading}

        {HeadingComponent()}

        <HeadingComponent />

        <HeadingComponent> </HeadingComponent>

        <h1 id="head">React with functional component</h1>
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));  
// root.render(heading);
root.render(<HeadingComponent />);
