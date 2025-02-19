
// create an element so it's from base library
const heading = React.createElement("h1",   // return object
    { id: "head" },         // attributes   // part of prop
    "Hello from React");    // Children     // part of prop

// create root is dom work so it's from reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));  
        
root.render(heading);       // convert object into html and render on domtree


