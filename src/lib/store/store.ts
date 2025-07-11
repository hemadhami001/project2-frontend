
// collect all slices and store


import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import instituteSlice from "./institute/instituteSlice";
import teacherSlice from "./teacher/teacherSlice";



const store = configureStore({
    reducer: {
     auth : authSlice,
     institute : instituteSlice,
     teacher : teacherSlice
    }
})

export default store;


// dispatch action haru lai use garna parcha
//dispach ko type paxi kaam lagcha hamilai
// dispatch (setName()) --> dispatch() : AppDispatch
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


// react-redux --> package ho
// react-redux ko useDispatch() --> dispatch() lai use garna ko lagi
// provide hooks to use dispatch and selector
// useSelector() --> to select data from the store
// useDispatch() --> to dispatch actions to the store