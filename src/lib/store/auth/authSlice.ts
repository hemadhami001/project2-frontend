import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IIntialSate, IUserData } from "./authSlice.type"
import { Status } from "@/lib/types/type"


const initialState : IIntialSate = {
    user: {
        username: "",
        password: ""
    },
    satus : Status.LOADING // Assuming the initial status is loading

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Define your reducers here
        setUser(state : IIntialSate, action : PayloadAction<IUserData> ) {
            state.user = action.payload
        },
        setStatus(state : IIntialSate, action : PayloadAction<Status>) {
            state.satus = action.payload
        }
    }
})

const {setUser, setStatus} = authSlice.actions

export default authSlice.reducer