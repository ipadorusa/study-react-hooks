import React, { useState } from 'react'

function SelectFruit() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'oragne'])
  const [newFruit, setNewFruit] = useState('')
  const addFruit = () => {
    setFruits([...fruits, newFruit])
    setNewFruit('')
  }
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button type="button" onClick={addFruit}>
        추가하기
      </button>
    </div>
  )
}

export default SelectFruit

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item) => (
      <p>{item}</p>
    ))}
  </div>
))
