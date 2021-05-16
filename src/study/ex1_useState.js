import React from 'react';

function ex1() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(prev => prev + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default ex1;
