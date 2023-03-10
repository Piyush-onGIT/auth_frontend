import React from 'react'
import { NavLink } from 'react-router-dom'
import { getToken } from '../services/LocalStorageService'

const Navbar = () => {
  const { access_token } = getToken()
  return (
    <>
    <h1>Navbar</h1>
    <div style={{display: "flex", justifyContent:"space-evenly"}}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>

    {access_token?
    <>
    <NavLink to="/user-profile">User Profile</NavLink>
    </>
    :
    <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </>
    }
    </div>

    <hr />
    </>
  )
}

export default Navbar