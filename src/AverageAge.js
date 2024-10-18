import React from 'react'
import users from "./users.json"

const AverageAge = () => {
  const adminUsers=users.filter(user=>user.role === "admin")
  const totalAge=adminUsers.reduce((sum,user)=> sum + user.age,0);

  const averageAge=totalAge / adminUsers.length;
  return (
    <>
      <div className="break"></div>
      <div className="card">
        میانگین سن ادمین ها:‌ <span data-testid="average-age">{averageAge}</span>
      </div>
    </>
  )
}

export default AverageAge
