import React, { useState, useEffect } from 'react'

function Repeat2() {
  const [flag, setFlag] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setFlag((prev) => !prev)
    }, 1000)
  })
  const fruits = flag ? FRUITS_1 : FRUITS_2
  return (
    <div>
      {fruits.map((item, idx) => (
        <p key={idx}>{item}</p>
        /**
         * 이럴 땐 <p key={item}>{item}</p> 이게 적합함
         */
      ))}
    </div>
  )
}

export default Repeat2

const FRUITS_1 = ['바나나', '오렌지']
const FRUITS_2 = ['바나나', '바나나', '오렌지']

/**
 * 행복이 중간에 왔을경우 react 는 다음 요소까지 같이 변경 된지 알고 새롭게 렌더링함
 * 새로운 렌더링을 막기 위해서는 key 속성을 통해서 처리
 * 이럴 땐 <p key={item}>{item}</p> 이게 적합함
 */
