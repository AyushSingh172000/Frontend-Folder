import React from "react";

const ChildB = ({ fun }) => {
  return (
    <div>
      <p>I am Child B</p>
      <button onClick={fun}>CLick</button>
    </div>
  );
};

export default ChildB;
