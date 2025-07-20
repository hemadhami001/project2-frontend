import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IIntialSate, IUserData, IRegisterData } from "./authSlice.type"
import { Status } from "@/lib/types/type"
import API from "@/lib/http"
import { AppDispatch } from "../store"
import { ILoginData } from "@/app/auth/login/login.type"


const initialState : IIntialSate = {
    user: {
        username: "",
        token: ""
    },
    status : Status.LOADING // Assuming the initial status is loading

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
            state.status = action.payload
        }
    }
})

const {setUser, setStatus} = authSlice.actions

export default authSlice.reducer

export function registerUser(data : IRegisterData) {
    return async function registerUserThunk(dispatch : AppDispatch) {
        try {
            const response = await API.post("auth/register", data)
            if (response.status === 201) {
                // k garxa ta
                dispatch(setStatus(Status.SUCCESS))
            }
            else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function loginUser(data : ILoginData) {
    return async function loginUserThunk(dispatch : AppDispatch) {
        try {
            const response = await API.post("auth/login", data)
            if (response.status === 200) {
                dispatch(setUser(response.data.data))
                localStorage.setItem("token", response.data.data.token)
                dispatch(setStatus(Status.SUCCESS))
            }
            else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}