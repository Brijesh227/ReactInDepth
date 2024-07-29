// https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=5
// https://www.youtube.com/watch?v=Fz_lpbrCE_M&list=PLovN13bqAx7CKHNJnW3npFEXlXUQBghNI&index=3

/**
 * Babel is transcompiler to convert jsx code into valid js code
 * <p>helko</p> => return React.createElement("p", null, "helko");
 * 
 * <a href="https://google.com" target="_blank" color='red'>visit google</a>
                              ===
                    React.createElement(
                        'a', 
                        { 
                          href: 'https://google.com', 
                          target: '_blank', 
                          color: 'red'
                        }, 
                        'visit google'
                    )
    Swc is rust based transcompiler way more faster than babel. doing same thing babel does.

    function hello(){
        return <div>
                    welcome 
                    <p>
                        world          
                        <span>!</span>
                    </p>
                </div>
    }

    jsx

    function hello() {
        return React.createElement("div", null, "welcome", 
                    React.createElement("p", null, "world", 
                        React.createElement("span", null, "!")
                    )
                );
    }
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp() {
    return(
        <div>
            <h1> Custom App</h1>
        </div>
    );
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const ele = "brh";
const reactElement = React.createElement(      // injected by babel
    "a",
    { href: 'https://google.com',target: '_blank'},
    'click me to visit',
    ele
)

const anotherEle = (<a href="https://google.com" target="_blank" color='red'>visit google</a>);

ReactDOM.createRoot(document.getElementById('root'))
.render(
  MyApp()               // this working
//   ReactElement          // this is nor working
//   anotherEle            // this also working
//   reactElement          // this also working    // click me to visitbrh
)
