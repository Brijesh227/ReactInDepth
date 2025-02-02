import { useState, useEffect, useLayoutEffect, useRef } from 'react';

// this code is used for do not create new reference of passed function
const useCallbackRef = (callback: any) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};


export const useFetch  = (options: any) => {
  const [data, setData] = useState(null);

  if(options.url) {
    // very very bad continous useEffect call
    // useEffect(() => {
    //   fetch(options.url)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // })

    // good useEffect call but only render on first time(mounting) do not react when url changed.
    // useEffect(() => {
    //   fetch(options.url)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

    // only options (every time new reference object passed and goes into infinite re-render)
    // useEffect(() => {
    //   fetch(options.url)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[options])


    // good useEffect call

    // useEffect(() => {
    //   fetch(options.url)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[options.url])  


    // what if passed function in options:

    const savedOnSuccess = useCallbackRef(options.onSuccess);

    useEffect(() => {
      console.log("useFetch useEffect ");
      if (options.url) {
        let isCancelled = false;
        fetch(options.url)
          .then((response) => response.json())
          .then((json) => {
            if (!isCancelled) {
              savedOnSuccess.current?.(json);
              setData(json);
            }
          });
        return () => {
          isCancelled = true;
        };
      }
    }, [options.url]);

  }

  return {
    data,
  }
}