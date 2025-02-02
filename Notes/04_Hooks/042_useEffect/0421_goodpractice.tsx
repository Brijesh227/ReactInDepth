
/**
 * Rules:
 *  -> Always use the setter for useState
 *  -> Always put a dependency array on useEffect, useCallback and useMemo
 *  -> But but but make a note don't depend on data you set.
 *  -> To run useEffect only once use empty array as dependency array first undefined compare with [] array next time [] with [] but using deepcompare(0421_dependencyArray.js)
 * 
 * 
 * 1. Always make sure to use dependency array in useEffect
 *  -> what happens first call useFecth called from this file which called useEffect in 042_useEffect 
 *      file called with empty dependency array but it is asynchronous calls fist time return null 
 *      then useEffect call and setData called which re-renders GoodUseEffect(because data changed) which
 *      called GoodUseEffect to run again, this check useEfffect with empty depency array it set data and rerender goes on...
 * 
 * 2. Use primitive values in dependency array.
 * 
 * 3. in case of reference handle extra re-render like in this file we do.
 * 
 * 4. depending on state mutated in useEffect
 */

import { useState } from 'react';
import { useFetch } from './code/useFetch';

// 1,2 and 3 point (see useFetch)
export default function GoodUseEffect() {
  const [url, setUrl] = useState('');

  const { data } = useFetch({
    url,
  });

  // what if passed function as well

  // const { data } = useFetch({
  //   url,
  //   onSuccess: () => console.log('Successed');
  // });

  console.log('here');


  return (
    <div>
      <h1>GoodUseEffect</h1>
      <div>{ JSON.stringify(data) }</div>
      <div>
        <button onClick={() => setUrl('/data.json')}> data </button>
        <button onClick={() => setUrl('/dummy.json')}> dummy </button>
      </div>
    </div>
  )
};