import React, { useState } from 'react'
import InputName from './InputName'

function Calculator() {
  const [name, setName] = useState('')
  return (
    <div>
      <p>환영합니다 {name}</p>
      <InputName inputVal={[name, setName]} />
    </div>
  )
}

export default Calculator
