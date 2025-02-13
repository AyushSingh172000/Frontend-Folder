import { useRef } from "react";
const RefExample = () => {
  let demoRef = useRef();

  function Change() {
    demoRef.current.style.color="red"
  }

  return (
    <div>
      <h1 ref={demoRef}>Learn ref</h1>
      <button onClick={Change}>click</button>
    </div>
  );
};
export default RefExample;
