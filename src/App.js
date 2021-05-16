import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(prev => prev + 1);
  }
  console.log('render');
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default App;
