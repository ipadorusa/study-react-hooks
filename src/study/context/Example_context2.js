import React, { createContext, useState, useContext } from 'react'

const UserContext = createContext('unknown')

function Example_context2() {
  const [name, setName] = useState('mike')

  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단메뉴</div>
        <Profile />
        <div>하단메뉴</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </UserContext.Provider>
    </div>
  )
}

export default Example_context2

const Profile = React.memo(function () {
  console.log('rendering ?')
  return (
    <div>
      <Greeting />
    </div>
  )
})

function Greeting() {
  const username = useContext(UserContext)
  return <p>나의 이름은 {username}</p>
}
