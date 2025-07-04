
// collect all slices and store


import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import studentSlice from "./studentSlice";



const store = configureStore({
    reducer: {
        // add your slices here
        // user: userReducer,
        // teacher: teacherReducer,
        // student: studentReducer,
        userSlice : userSlice,
        studentSlice : studentSlice
    }
})

export default store;


// dispatch action haru lai use garna parcha
//dispach ko type paxi kaam lagcha hamilai
// dispatch (setName()) --> dispatch() : AppDispatch
export type AppDispatch = typeof store.dispatch
