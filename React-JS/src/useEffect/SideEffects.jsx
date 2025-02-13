import { useEffect, useState } from "react";

const SideEffects = () => {
  let [count, setCount] = useState(0);

  // ! SYNTAX ---> useEffect(() => {}, [dependancy arr]);

  //! RENDER
  useEffect(() => {
    console.log("render");
  });

  //! componentDidMount
  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return () => {
      // componentWillUnmount()
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  //! componentDidUpdate
  useEffect(() => {
    console.log("COMPONENT UPDATED");

    return () => {
      // getSnapshotBeforeUpdate()
      console.log("Prev state was ", count);
    };
  }, [count]);

  return (
    <div>
      <h1>Learn useEffect hook</h1>
      <h2>Counter {count}</h2>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default SideEffects;
