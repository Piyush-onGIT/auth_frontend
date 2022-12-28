import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/LocalStorageService';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [server_error, setServerError] = useState({})
    const [server_msg, setServerMsg] = useState({})
    const [changeUserPassword] = useChangeUserPasswordMutation()
    const {access_token} = getToken()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password : data.get('password'),
            password2 : data.get('password2')
        }
        const res = await changeUserPassword({actualData, access_token})
        if(res.error){
            setServerMsg({})
            setServerError(res.error.data.errors)
        }
        if(res.data){
            // console.log(res.data)
            setServerError({})
            setServerMsg(res.data)
            document.getElementById("password-change-form").reset();
            navigate('/user-profile')
        }
    };


const myData = useSelector(state => state.user)
// console.log("Changed Password", myData)

  return (
    <>
    <h1>Change Password Page</h1>
    <hr />
    <form action="" id='password-change-form' onSubmit={handleSubmit}>
        <label htmlFor="password">New Password </label>
        <input type="password" required id='password' name='password' placeholder='Enter New Password'/>
        {server_error.password? <p>{server_error.password[0]}</p> : ""}
        <br /> <br />
        <label htmlFor="password2">Confirm Password </label>
        <input type="password" required id='password2' name='password2' placeholder='Re - Enter New Password'/>
        {server_error.password2? <p>{server_error.password2[0]}</p> : ""}
        {server_error.non_field_errors? <p>{server_error.non_field_errors[0]}</p> : ""}
        <br /> <br />
        <button type='submit'>Save</button>
        <br /> <br />
        {/* New User? <NavLink to="/register">Send Email</NavLink> */}
    </form>
    </>
  )
}

export default ChangePassword