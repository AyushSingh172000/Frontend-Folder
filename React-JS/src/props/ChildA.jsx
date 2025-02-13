const ChildA = (x) => {
  console.log(x);//{propVal:{data,user}}

  let { propVal :{data,user:{id,ename}}} = x;
  console.log(data,id,ename);
  
  return (
    <div>
      <h3>Props Child</h3>
    </div>
  );
};

export default ChildA;
