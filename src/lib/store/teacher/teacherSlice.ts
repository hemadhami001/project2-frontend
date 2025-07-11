import { Status } from "@/lib/types/type";
import { IInitialTeacherData, ITeacher } from "./teacherSlice.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState : IInitialTeacherData = {
    teacher: {
        teacherName: "",
        teacherEmail: "",
        teacherPhoneNumber: "",
        teacherAddress: ""
    },
    status: Status.LOADING // Assuming the initial status is loading
}

const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        // Define your reducers here
        setTeacher(state: IInitialTeacherData, action: PayloadAction<ITeacher>) {
            state.teacher = action.payload;
        },
        setStatus(state: IInitialTeacherData, action: PayloadAction<Status>) {
            state.status = action.payload;
        }
    }
})

const { setTeacher, setStatus } = teacherSlice.actions;

export default teacherSlice.reducer;