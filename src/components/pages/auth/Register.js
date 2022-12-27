import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
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
            password2 : data.get('password2')
        }
        if (actualData.email && actualData.name && actualData.college && actualData.collegeplace && actualData.year && actualData.pnumber && actualData.password && actualData.password2){
            if (actualData.password === actualData.password2){
                console.log(actualData);
                document.getElementById('register-form').reset();
                navigate('/user-profile');
            } else {
                console.log("Password do not match");
                document.getElementById('register-form').reset();
            }
            
        } else {
            console.log("All Fields are Required");
        }
    }
  return (
    <>
    <h1>Register Page</h1>
    <hr />
    <form action="" id='register-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" required id='email' name='email' placeholder='Enter Email'/>
        <br /> <br />
        <label htmlFor="name">Name </label>
        <input type="text" required id='name' name='name' placeholder='Enter Name'/>
        <br /> <br />
        <label htmlFor="college">College </label>
        <input type="text" required id='college' name='college' placeholder='Enter College'/>
        <br /> <br />
        <label htmlFor="collegeplace">Place of College </label>
        <input type="text" required id='collegeplace' name='collegeplace' placeholder='Enter Place of College'/>
        <br /> <br />
        <label htmlFor="year">Year </label>
        <input type="number" required id='year' name='year' placeholder='Enter your Year'/>
        <br /> <br />
        <label htmlFor="pnumber">Phone Number </label>
        <input type="number" required id='pnumber' name='pnumber' placeholder='Enter your Phone Number'/>
        <br /> <br />
        <label htmlFor="password">Password </label>
        <input type="password" required id='password' name='password' placeholder='Enter Password'/>
        <br /> <br />
        <label htmlFor="password2">Confirm Password </label>
        <input type="password" required id='password2' name='password2' placeholder='Re - Enter Password'/>
        <br /> <br />
        <button type='submit'>Register</button>
        <br /> <br />
        Already Have an Account? <NavLink to="/login">Login</NavLink>
    </form>
    </>
  )
}

export default Register;