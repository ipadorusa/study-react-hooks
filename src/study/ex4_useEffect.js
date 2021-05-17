import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `업데이트 횟수${count}`;
  });
  return (
    <div>
      <button type='button' onClick={() => setCount(prev => prev + 1)}>
        증가
      </button>
    </div>
  );
}

export default App;
