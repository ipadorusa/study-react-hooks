import React, { useState } from 'react'

function InputName(props) {
    const [name, setName] = props.inputVal;
    const inputChange = event => {
        setName(event.target.value)
    }
    
    return (
        <div>
            {!name && <p>입력대기중............</p>}
            {name && <p>{name}</p>}
            <input type='text' value={name} onChange={inputChange} />
        </div>
    )
}

export default InputName
