import React, { useState } from "react";

const ControlledForms2 = () => {
  let [userData, setUserData] = useState({
    name: "",
    age: "",
    designation: "",
  });

  let handleForm = (event) => {
    // console.log(event);
    let { name, value } = event.target;
    // console.log({ [name]: value });
    setUserData({...userData, [name]: value });
  };

  let formSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div>
      <h1>Controlled Forms - Optimal Way</h1>
      <form onSubmit={formSubmit}>
        <label>Name :</label>
        <input
          type="text"
          value={userData.name}
          onChange={handleForm}
          name="name"
        />
        <br />
        <br />
        <label>Age :</label>
        <input
          type="number"
          value={userData.age}
          onChange={handleForm}
          name="age"
        />
        <br />
        <br />
        <label>Designation :</label>
        <input
          type="text"
          value={userData.designation}
          onChange={handleForm}
          name="designation"
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
