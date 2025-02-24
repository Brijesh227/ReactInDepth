/**
 * Both react and react-dom get file from node_modules
 * but having error 
 *      Browser scripts cannot have imports or exports.
 * 
 * why?
 *  because import is not working in normal js
 * 
 * soln:
 *  to Fix this use type="module" in html
 * 
 */

import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{ id: "head", key:"1" },"Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(heading);
