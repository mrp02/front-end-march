import React from "react";
import { useState } from "react";
const Props = () => {
  const [myName, setName] = useState("John");
  const [count, setCount] = useState(0);

  const changeName = () => {
    setName("Jane");

    console.log(myName);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="bg-secondary p-5">
      <p>{myName}</p>
      <button onClick={changeName} className="bg-blue">
        Change Name
      </button>

      <div>
        <button onClick={increment} className="bg-danger">
          Increment
        </button>
        <p>{count}</p>
        <button onClick={decrement} className="bg-drak text-light p-3">Decrement</button>
      </div>
    </div>
  );
};

export default Props;
