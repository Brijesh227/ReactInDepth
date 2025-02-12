/**
 * Prevent CounterButton from re-rendering when count state changes.
 * 
 * why happening this:
 *  1. when state changes, react re-render the component using setCount(), it will re-render the child component also
 *  2. every time new reference of onClick passed to the child component
 *      soln., use useCallback hook
 *  3. But still child re-render
 *      because:
          By default, if a parent component re-renders, all its child components also re-render, even if their props didn't change.
 */


import React, { useState, useCallback } from "react";

const CounterButton = ({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Increment</button>;
};

const OptimisedCounterButton = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Increment</button>;
});

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const optimisedHandleClick = useCallback(() => {
    setCount((prev) =>  prev + 1);
  },[]);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* <CounterButton onClick={handleClick} /> */}
      <OptimisedCounterButton onClick={optimisedHandleClick} />
    </div>
  );
};

export default CounterParent;