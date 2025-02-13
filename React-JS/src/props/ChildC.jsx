const ChildC = ({ setterFun }) => {
  let data = "Hello React";
  return (
    <div>
      <h2>I am Child C</h2>
      <button onClick={() => setterFun(data)}>send to parent</button>
    </div>
  );
};

export default ChildC;
