import React from 'react'
import users from "./users.json"

const UserItem = () => {
  const filteredUsers=users.filter(user=> user.role === "user")
  return (
    <div className='user-list' >
      {filteredUsers.map((user,index)=>(
        <div key={index} className="card">
      <img
        // src={`https://api.adorable.io/avatars/200/${user.name}.png`}
        src={"https://picsum.photos/id/1/200/300"}
        alt="avatar"
      />
      <h3 data-testid="user-name">{user.name}</h3>
      
    </div>
      ))}
      </div>
  )
}

export default UserItem
