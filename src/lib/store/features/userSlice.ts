import { createSlice } from "@reduxjs/toolkit"

type user={
    primary_id:number,
    name:string,
    email:string
}
interface initialState{
    user:user|undefined,
    change:boolean
}
const localUser = JSON.parse(localStorage.getItem('user')||"{}")
const initialState:initialState = {
    user:localUser,
    change:false
}

const userSlice = createSlice({
    initialState,
    name:"user slice",
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logOut:(state)=>{
            state.user=undefined
            localStorage.setItem('user',JSON.stringify({}))
        },
        setChange:(state)=>{
            state.change=!state.change
        }
    }
})

export const {setUser,setChange,logOut} = userSlice.actions

export default userSlice