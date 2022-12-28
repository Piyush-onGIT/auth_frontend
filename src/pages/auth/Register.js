import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { storeToken } from '../../services/LocalStorageService';
import { useRegisterUserMutation } from '../../services/userAuthApi';

const Register = () => {
    const navigate = useNavigate();
    const [server_error, setServerError] = useState({})
    const [registerUser] = useRegisterUserMutation()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email'),
            name : data.get('name'),
            college : data.get('college'),
            collegeplace : data.get('collegeplace'),
            year : data.get('year'),
            pnumber : data.get('pnumber'),
            password : data.get('password'),
            password2 : data.get('password2'),
        }
        const res = await registerUser(actualData)
        if(res.error){
            setServerError(res.error.data.errors)
        }
        if(res.data){
            console.log(res.data)
            storeToken(res.data.token)
            navigate('/user-profile')
        }
    }
  return (
    <>
    <h1>Register Page</h1>
    <hr />
    <form action="" id='register-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" required id='email' name='email' placeholder='Enter Email'/>
        {server_error.email? <p>{server_error.email[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="name">Name </label>
        <input type="text" required id='name' name='name' placeholder='Enter Name'/>
        {server_error.name? <p>{server_error.name[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="college">College </label>
        <input type="text" required id='college' name='college' placeholder='Enter College'/>
        {server_error.college? <p>{server_error.college[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="collegeplace">Place of College </label>
        <input type="text" required id='collegeplace' name='collegeplace' placeholder='Enter Place of College'/>
        {server_error.collegeplace? <p>{server_error.collegeplace[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="year">Year </label>
        <input type="number" required id='year' name='year' placeholder='Enter your Year'/>
        {server_error.year? <p>{server_error.year[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="pnumber">Phone Number </label>
        <input type="number" required id='pnumber' name='pnumber' placeholder='Enter your Phone Number'/>
        {server_error.pnumber? <p>{server_error.pnumber[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="password">Password </label>
        <input type="password" required id='password' name='password' placeholder='Enter Password'/>
        {server_error.password? <p>{server_error.password[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="password2">Confirm Password </label>
        <input type="password" required id='password2' name='password2' placeholder='Re - Enter Password'/>
        {server_error.password2? <p>{server_error.password2[0]}</p> : ""}
        {server_error.non_field_errors? <p>{server_error.non_field_errors[0]}</p> : ""}
        <br /> <br />
        <button type='submit'>Register</button>
        <br /> <br />
        Already Have an Account? <NavLink to="/login">Login</NavLink>
    </form>
    </>
  )
}

export default Register;