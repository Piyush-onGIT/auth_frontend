import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("Logout Clicked");
        navigate('/login')
    }
    const handleChangePassword = () => {
        navigate('/change-password')
    }
  return (
    <>
        <h1>User Profile Page</h1>
        <hr />
        <h2>Email : kraniket@gmail.com</h2>
        <h2>Name : Aniket Kumar</h2>
        <h2>College : NIT Raipur</h2>
        <h2>College Place : Raipur</h2>
        <h2>Year : 2</h2>
        <h2>Phone Number : 7717789081</h2>
        <h2>Events Registered : Chess, Cricket</h2>
        <button onClick={handleChangePassword}>Change Password</button>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default UserProfile