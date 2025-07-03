import { createSlice } from "@reduxjs/toolkit";





createSlice({
    name: "studentSlice",
    initialState: {
        data : "",
    },
    reducers: {
        setData(state, action) {
            state.data = 'hema'
        }
    }
    })