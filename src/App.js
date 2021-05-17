import React, { useState, useEffect } from 'react';
import Profile from './study/ex5_useEffect';

function App() {
  const [userId, setUserId] = useState(0);
  return (
    <div>
      <Profile userId={userId} />
      <button type='button' onClick={() => setUserId(userId + 1)}>
        userId 변경
      </button>
    </div>
  );
}

export default App;
