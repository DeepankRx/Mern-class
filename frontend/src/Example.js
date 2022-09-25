import React, { useState } from 'react';

// const Example = () => {
//   //const [x,setX] = useState('')
//   const [name, setName] = useState('');
//   return (
//     <div>
//       <label>My Name Is : {name}</label>
//       <br />
//   <input type="text" onChange={(e) => setName(e.target.value)} />
//     </div>
//   );
// };

const Example = () => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      Counter : {count}
      <br />
      <button onClick={() => setCounter(count + 1)}>Increase By 1</button>
      <button onClick={() => setCounter(count - 1)}>Decrease By 1</button>
      <button onClick={() => setCounter(0)}>Set To 0</button>
    </div>
  );
};

export default Example;
