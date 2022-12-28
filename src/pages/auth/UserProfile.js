import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { unSetUserToken } from '../../features/authSlice'
import { setUserInfo, unSetUserInfo } from '../../features/userSlice'
import { getToken, removeToken } from '../../services/LocalStorageService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'

const UserProfile = () => {
  const handleLogout = () => {
    dispatch(unSetUserInfo({
      email: "",
      name: "",
      college: "",
      collegeplace: "",
      year: "",
      pnumber: ""         
    }))
    dispatch(unSetUserToken({access_token: null}))
    removeToken()
    navigate('/login')
  }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { access_token } = getToken()
    const {data, isSuccess} = useGetLoggedUserQuery(access_token)
    const [userData, setUserData] = useState({
      email:"",
      name:"",
      college:"",
      collegeplace:"",
      year:"",
      pnumber:""
    })

    useEffect(()=>{
      if (data && isSuccess){
        setUserData({
          email: data.email,
          name: data.name,
          college: data.college,
          collegeplace: data.collegeplace,
          year: data.year,
          pnumber: data.pnumber
        })
      }
    }, [data, isSuccess])

    useEffect(()=>{
      if (data && isSuccess){
        dispatch(setUserInfo({
          email: data.email,
          name: data.name,
          college: data.college,
          collegeplace: data.collegeplace,
          year: data.year,
          pnumber: data.pnumber         
        }))
      }
    }, [data, isSuccess, dispatch])

    const handleChangePassword = () => {
        navigate('/change-password')
    }
  return (
    <>
        <h1>User Profile Page</h1>
        <hr />
        <h2>Email : {userData.email}</h2>
        <h2>Name : {userData.name}</h2>
        <h2>College : {userData.college}</h2>
        <h2>College Place : {userData.collegeplace}</h2>
        <h2>Year : {userData.year}</h2>
        <h2>Phone Number : {userData.pnumber}</h2>
        <h2>Events Registered : Chess, Cricket</h2>
        <button onClick={handleChangePassword}>Change Password</button>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default UserProfile