import React, { useState, useEffect } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState(null);
  // useEffect(async () => {
  //   let user = await getUserApi();
  //   console.log(user);
  //   setUser(user);
  // });
  useEffect(() => {
    getUserApi(userId).then(data => setUser(data));
  }, [userId]);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는중....</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`name is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

export default Profile;

const USER1 = { name: 'mike', age: 23 };
const USER2 = { name: 'jane', age: 31 };
function getUserApi(userId) {
  return new Promise(res => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
