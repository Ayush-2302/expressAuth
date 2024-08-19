import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("hello useEffect");
  },[count]);
  return (
    <div className="app">
      {count}
      <br />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
