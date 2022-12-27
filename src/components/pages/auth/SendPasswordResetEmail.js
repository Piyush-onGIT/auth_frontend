import React from 'react';
import { useNavigate } from 'react-router-dom';

const SendPasswordResetEmail = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email')
        }
        if (actualData.email){
            console.log(actualData);
            document.getElementById('forgot-password-form').reset();
            navigate('/');
        } else {
            console.log("All Fields are Required");
        }
    }
  return (
    <>
    <h1>Forgot Password Page</h1>
    <hr />
    <form action="" id='forgot-password-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" required id='email' name='email' placeholder='Enter Email'/>
        <br /> <br />
        <button type='submit'>Send</button>
    </form>
    </>
  )
}

export default SendPasswordResetEmail;