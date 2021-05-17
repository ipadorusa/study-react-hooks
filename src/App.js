import React, {useState} from 'react'
import Profile from './Profile';
import Clock from './study/Clock'
import WidthPrinter from './study/WidthPrinter'

function App() {
  const [count, setCount] = useState(0);
  return ( 
    <div>
      <Profile />
      <Clock />
      <div>{count === 0 && <WidthPrinter />}</div>
      <button type="button" onClick={() => setCount(prev => prev + 1)}>증가</button>
    </div>
  )
}

export default App
