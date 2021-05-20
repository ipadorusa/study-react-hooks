import React, { useState, useEffect } from 'react'

function Repeat() {
  const [flag, setFlag] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setFlag((prev) => !prev)
    }, 1000)
  })
  if (flag) {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="orange">귤</p>
      </div>
    )
  } else {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="happ">행복</p>
        <p key="orange">귤</p>
      </div>
    )
  }
}

export default Repeat

/**
 * 행복이 중간에 왔을경우 react 는 다음 요소까지 같이 변경 된지 알고 새롭게 렌더링함
 * 새로운 렌더링을 막기 위해서는 key 속성을 통해서 처리
 */
