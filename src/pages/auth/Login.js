import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email'),
            password : data.get('password')
        }
        if (actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById('login-form').reset();
            navigate('/user-profile');
        } else {
            console.log("All Fields are Required");
        }
    }
  return (
    <>
    <h1>Login Page</h1>
    <hr />
    <form action="" id='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" required id='email' name='email' placeholder='Enter Email'/>
        <br /> <br />
        <label htmlFor="password">Password </label>
        <input type="password" required id='password' name='password' placeholder='Enter Password'/>
        <br /> <br />
        <button type='submit'>Login</button>
        <br /> <br />
        New User? <NavLink to="/register">Register</NavLink>
        <br /> <br />
        <NavLink to="/forgot-password">Forgot Password</NavLink>
    </form>
    </>
  )
}

export default Login;