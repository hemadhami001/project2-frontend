
// collect all slices and store


import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import studentSlice from "./studentSlice";
import teacherSlice from './teacherSlice';



const store = configureStore({
    reducer: {
        // add your slices here
        // user: userReducer,
        // teacher: teacherReducer,
        // student: studentReducer,
        user : userSlice,
        student : studentSlice,
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