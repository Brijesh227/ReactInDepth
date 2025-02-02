import { useEffect, useState, useCallback, useMemo } from 'react';

 // 4 point
export default function GoodPracticeWithuseCallbackuseMemo() {
  const [number, setNumber] = useState<any[]>([]);

  console.log('here');
  
  useEffect(() => {
    fetch('./number.json')
      .then(res => res.json())
      .then(data => setNumber(data))
  },[])

  // this is totally fine but what if you want to send this function to child component then use useCallback
  // const addOne = () => {
  //   setNumber([...number, number.length + 1]);
  // }

  // this replace [1,2,3] with [1] because of closure + empty dependency array
  // const addOne = useCallback(() => {
  //   setNumber([...number, number.length + 1]);
  // },[]);

  // when number change regenerate new function it's not recommended because of performance
  // const addOne = useCallback(() => {
  //   setNumber([...number, number.length + 1]);
  // },[number]);


  // use this version
  const addOne = useCallback(() => {
    setNumber((currentNumber) => [
      ...currentNumber,
      currentNumber.length + 1
    ]);
  },[]);

  // suppose heavy and synchronous
  const sum = useMemo(() => number.reduce((acc, curr) => acc + curr,0), [number]);

  return (
    <div>
      <h1>GoodUseEffectWithuseCallbackuseMemo</h1>
      <div>{ JSON.stringify(number) }</div>
      <div>Sum: {sum}</div>
      <button onClick={addOne}> Add to number </button>
    </div>
  )
};