import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIncomingUserPayload, IInitialStudentData } from "./types"

const initialStudentData : IInitialStudentData = {
    data: ""
}


const studentSlice = createSlice({
    name: "studentSlice",
    initialState: initialStudentData,
    reducers: {
        setData(state : IInitialStudentData, action : PayloadAction<string|number>) {
            state.data = action.payload
            // name: "hema",
            // address: "mahendranagar"
        },
    }
    })

// reducer ko name j hunchha, action ko name pani same tai huncha
const { setData } = studentSlice.actions

export { setData }
export default studentSlice.reducer

function  setName(){
}
setName("hema")