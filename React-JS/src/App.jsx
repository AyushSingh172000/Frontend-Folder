import React, { useState } from "react";
import Parent from "./props/Parent";
import PropsDrillingParent from "./propsdrilling/PropsDrillingParent";
import InlineCSS from "./reactcss/InlineCSS";
import Footer from "./reactcss/Footer";
import Profile from "./images/Profile";
import FlipkartNav from "./task1/FlipkartNav";
import ControlledForms1 from "./forms/ControlledForms1";
import ControlledForms2 from "./forms/ControlledForms2";
import TodoWrapper from "./todoApp/TodoWrapper";
import RefExample from "./refs/RefExample";
import UncontrolledForms from "./forms/UncontrolledForms";
import LifeCycle from "./lifecycle/LifeCycle";
import SideEffects from "./useEffect/SideEffects";
import SideEffects2 from "./useEffect/SideEffects2";
import FetchApi from "./fetch/FetchApi";

const App = () => {
  let [toggle, setToggle] = useState(false);

  return (
    <div>
      {/*  <Parent/> */}
      {/*  <PropsDrillingParent /> */}
      {/* <InlineCSS />
      <Footer/>
      <Profile/> */}
      {/* <FlipkartNav /> */}
      {/* <ControlledForms1 /> */}
      {/* <ControlledForms2 /> */}
      {/* <TodoWrapper /> */}
      {/* <RefExample/> */}
      {/* <UncontrolledForms /> */}
      {/* <button onClick={() => setToggle(!toggle)}>toggle switch</button>
      {toggle ? <LifeCycle /> : <h1>No Component</h1>} */}
      {/* <SideEffects/> */}

      {/* <button onClick={() => setToggle(!toggle)}>toggle me</button>
      {toggle ? <SideEffects2 /> : <h1>No component</h1>} */}

      <FetchApi />
    </div>
  );
};

export default App;
