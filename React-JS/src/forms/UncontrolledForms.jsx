import { useRef } from "react";

const UncontrolledForms = () => {
  let usernameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  let formSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
  };

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={formSubmit}>
        <label>Username</label>
        <input type="text" ref={usernameRef} />
        <br />
        <br />
        <label>Email</label>
        <input type="text" ref={emailRef} />
        <br />
        <br />
        <label>Password</label>
        <input type="text" ref={passwordRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForms;
