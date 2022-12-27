import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <h1>Navbar</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/user-profile">User Profile</NavLink>
    </>
  )
}

export default Navbar