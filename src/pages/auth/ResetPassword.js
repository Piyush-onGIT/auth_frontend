import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../../services/userAuthApi';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [server_error, setServerError] = useState({})
    const [server_msg, setServerMsg] = useState({})
    const [resetPassword] = useResetPasswordMutation()
    const {id, token} = useParams()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password : data.get('password'),
            password2 : data.get('password2'),
        }
        const res = await resetPassword({actualData, id, token})
        if(res.error){
            setServerMsg({})
            setServerError(res.error.data.errors)
        }
        if(res.data){
            setServerError({})
            setServerMsg(res.data)
            document.getElementById("password-reset-form").reset();
            navigate('/login')
        }
    }
  return (
    <>
    <h1>Reset Password Page</h1>
    <hr />
    <form action="" id='password-reset-form' onSubmit={handleSubmit}>
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
        {server_msg.msg? <p>{server_msg.msg}</p>:""}
    </form>
    </>
  )
}

export default ResetPassword