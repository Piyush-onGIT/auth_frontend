import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';

const Login = () => {
    const navigate = useNavigate();
    const [server_error, setServerError] = useState({})
    const [loginUser] = useLoginUserMutation()
    const  dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email'),
            password : data.get('password')
        }
        const res = await loginUser(actualData)
        if(res.error){
            setServerError(res.error.data.errors)
        }
        if(res.data){
            // console.log(res.data)
            storeToken(res.data.token)
            let { access_token } = getToken()
            dispatch(setUserToken({ access_token: access_token }))
            navigate('/user-profile')
        }
    }
    let { access_token } = getToken()
    useEffect(()=>{
        dispatch(setUserToken({ access_token: access_token }))
    }, [access_token, dispatch] )


  return (
    <>
    <h1>Login Page</h1>
    <hr />
    <form action="" id='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" required id='email' name='email' placeholder='Enter Email'/>
        {server_error.email? <p>{server_error.email[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="password">Password </label>
        <input type="password" required id='password' name='password' placeholder='Enter Password'/>
        {server_error.password? <p>{server_error.password[0]}</p> : ""}
        {server_error.non_field_errors? <p>{server_error.non_field_errors[0]}</p> : ""}
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