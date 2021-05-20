import React, { useState } from 'react'

function ex2_useEffect() {
  const [count, setCount] = useState(0)
  function onClick() {
    ReactDOM.unstable_batchedUpdates(() => {
      setCount((prev) => prev + 1)
      setCount((prev) => prev + 1)
    })
  }
  useEffect(() => {
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  })
  console.log('render')
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  )
}

export default ex2_useEffect
