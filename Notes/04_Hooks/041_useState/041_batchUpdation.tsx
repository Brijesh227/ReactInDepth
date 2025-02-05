/**
 * Most important useMemo instead of useEffect to set array or object because of performance optimization.
 * to solve batch update make one object state insted of multiple state
 * 
 * 
 * Before React 18:
    Synchronous updates in event handlers: ✅ Batching occurs.
    Asynchronous updates (async/await, setTimeout): ❌ No batching; multiple re-renders.


  After React 18:
    Both synchronous and asynchronous updates: ✅ Batching occurs in both cases.
 * 
 */

import React, { useEffect, useMemo, useState } from 'react'

function dummyCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "john",
        roles: {
          admin: true,
          user: true
        }
      })
    }, 1000)
  });
}


function BatchUpdation() {
  // const [name, setName] = useState<any>();
  // const [roles, setRoles] = useState<any>();
  const [info, setInfo] = useState<any>({
    name: "",
    roles: {}
  });

  // const [roleList, setRoleList] = useState<any>();

  // useMemo instead of useEffect to set array or object
  // useEffect(() => {
  //   console.log('lol', name, roles);
  //   if(name && roles) {
  //     setRoleList(Object.keys(roles).filter((role) => roles[role]));
  //   }
  // }, [name, roles]);

  const roleList = useMemo(
    () => Object.keys(info.roles).filter((role) => info.roles[role])
  , [info.roles]);
  

  // before react 18 only: it will call setName re-rendering component and setRoles called and re-rendering component one by one
  const loadAsyncUser = async () => {
    const data: any = await dummyCall();
    console.log('data', data);
    // setName(data.name);
    // setRoles(data.roles);
  }

  // it will call setName and setRoles together and re-rendering component
  const loadUser = () => {
    // setName('jack');
    // setRoles({
    //   admin: true,
    // });
  }

  return (
    <div>
      {/* <div>Name: { JSON.stringify(name) }</div> */}
      {/* <div>Name: { JSON.stringify(roles) }</div> */}
      <div>Role: { JSON.stringify(roleList) }</div>

      <button onClick={loadAsyncUser}>Load Async User</button>
      <button onClick={loadUser}>Load User</button>
    </div>
  )
}

export default BatchUpdation