import { useState } from "react";
const States = () => {
  // console.log(useState());//[undefined, ƒ]
  let [state, setState] = useState("Hello");
  let [cart,setCart] = useState("add to cart")

  function update(){
    setState("BYee")
  }
  return (
    <div>
      <h1>State Component {state}</h1>
      <button onClick={update}>click</button>
      <button onClick={()=>{setCart("go to cart")}}>{cart}</button>
    </div>
  );
};
export default States;
