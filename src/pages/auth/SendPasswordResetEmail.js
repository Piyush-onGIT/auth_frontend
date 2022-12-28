import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmailMutation } from '../../services/userAuthApi';

const SendPasswordResetEmail = () => {
    const navigate = useNavigate();
    const [server_error, setServerError] = useState({})
    const [server_msg, setServerMsg] = useState({})
    const [sendPasswordResetEmail] = useSendPasswordResetEmailMutation()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email')
        }
        const res = await sendPasswordResetEmail(actualData)
        if(res.error){
            setServerMsg({})
            setServerError(res.error.data.errors)
        }
        if(res.data){
            // console.log(res.data)
            setServerError({})
            setServerMsg(res.data)
            document.getElementById("password-reset-email-form").reset();
        }
    }
  return (
    <>
    <h1>Forgot Password Page</h1>
    <hr />
    <form action="" id='password-reset-email-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" required id='email' name='email' placeholder='Enter Email'/>
        {server_error.email? <p>{server_error.email[0]}</p> : ""}
        {server_error.non_field_errors? <p>{server_error.non_field_errors[0]}</p> : ""}
        <br /> <br />
        <button type='submit'>Send</button>
        {server_msg.msg? <p>{server_msg.msg}</p>:""}
    </form>
    </>
  )
}

export default SendPasswordResetEmail;