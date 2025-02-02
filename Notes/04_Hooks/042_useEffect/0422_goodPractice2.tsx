import { useEffect, useState } from 'react';

export default function GoodPracticeUseEffect2() {
  const [timer, setTimer] = useState(0);
  console.log('here');

  // In UI 0 -> 1 and 1 remains as it is because interval function(inside useEffect) forms a closure with timer = 0 and increment to 1 every time
  // to prevent this use prev value given by setter function
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log('lol timer',timer);
  //     setTimer(timer + 1);
  //   },1000);

  //   return () => clearInterval(interval);
  // },[])

  // to solve continous running we use depency array
  // below code add exponential call for every second.
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log('lol timer',timer);
  //     setTimer(timer + 1);
  //   },1000);

  //   return () => clearInterval(interval);
  // },[timer])


  // final solution
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log('lol timer',timer);
  //     setTimer(prevTimer => prevTimer + 1); // because useEffect called asynchoronously
  //   },1000);

  //   return () => clearInterval(interval);
  // },[])


  return (
    <div>
      <div>Timer: { timer }</div>
    </div>
  );
};