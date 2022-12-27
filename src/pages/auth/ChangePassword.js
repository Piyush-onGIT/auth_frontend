import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password : data.get('password'),
            password2 : data.get('password2')
        }
        if (actualData.password && actualData.password2){
            if (actualData.password === actualData.password2){
                console.log(actualData);
                document.getElementById('reset-password-form').reset();
                navigate('/user-profile');
            } else {
                console.log("Password do not match");
                document.getElementById('reset-password-form').reset();
            }
            
        } else {
            console.log("All Fields are Required");
        }
    }
  return (
    <>
    <h1>Change Password Page</h1>
    <hr />
    <form action="" id='reset-password-form' onSubmit={handleSubmit}>
        <label htmlFor="password">New Password </label>
        <input type="password" required id='password' name='password' placeholder='Enter New Password'/>
        <br /> <br />
        <label htmlFor="password2">Confirm Password </label>
        <input type="password" required id='password2' name='password2' placeholder='Re - Enter New Password'/>
        <br /> <br />
        <button type='submit'>Save</button>
        <br /> <br />
        {/* New User? <NavLink to="/register">Send Email</NavLink> */}
    </form>
    </>
  )
}

export default ChangePassword