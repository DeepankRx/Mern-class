import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const addByOne = () => {
    setCount(count + 1);
    if (count % 5 == 0) alert('Number is multiple of 5');
  };
  return (
    <div>
      <h1>Example</h1>
      <button
        onClick={() => {
          addByOne();
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Example;
