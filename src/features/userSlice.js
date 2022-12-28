import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    name:"",
    college:"",
    collegeplace:"",
    year:"",
    pnumber:"",
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo:(state, action) =>{
        state.email = action.payload.email
        state.name = action.payload.name
        state.college = action.payload.college
        state.collegeplace = action.payload.collegeplace
        state.year = action.payload.year
        state.pnumber = action.payload.pnumber
    },
    unSetUserInfo:(state, action) =>{
        state.email = action.payload.email
        state.name = action.payload.name
        state.college = action.payload.college
        state.collegeplace = action.payload.collegeplace
        state.year = action.payload.year
        state.pnumber = action.payload.pnumber
    },
  },
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions

export default userSlice.reducer