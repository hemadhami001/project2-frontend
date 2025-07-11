import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IInstitute, IInstituteInitialData } from "./instituteSlice.type"
import { Status } from "@/lib/types/type"




const initialState : IInstituteInitialData = {
    institute: {
        instituteName: "",
        instituteEmail: "",
        institutePhoneNumber: "",
        instituteAddress: ""
    },
    status: Status.LOADING // Assuming the initial status is loading
}

const instituteSlice = createSlice({
    name: 'institute',
    initialState,
    reducers: {
        // Define your reducers here
        setInstitute(satate : IInstituteInitialData, action : PayloadAction<IInstitute>) {
            satate.institute = action.payload
        },
        setStatus(state : IInstituteInitialData, action : PayloadAction<Status>) {
            state.status = action.payload
        }
    }
})

const { setInstitute, setStatus } = instituteSlice.actions

export default instituteSlice.reducer