/**
 * Use primitive values in dependency array.
 * 
 * Dependency array in react might be working like below code
 *  -> useEffect
 *  -> useMemo
 *  -> useCallback
 * 
 * 
 */

const deepcompare = (oldDeps, newDeps) => {
  return oldDeps.length === newDeps.length && oldDeps.every((ele, index) => ele === newDeps[index]);
}

const obj = { a: 1 };
deepcompare([],[])        // true
deepcompare([],[1])       // false
deepcompare([obj],[obj])  // true

const objRef = obj
deepcompare([obj],[objRef])   // true
deepcompare([obj],[{a: 1}])   // false