import { Status } from "@/lib/types/type";
import { IInstituteCourseInitialData } from "./institute-course-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import API from "@/lib/http";



const initialState : IInstituteCourseInitialData = {
    status : Status.LOADING,
    courses : [{
        id : "1",
        courseName : "Sample Course",
        coursePrice : "100"
    }, {
        id : "2",
        courseName : "Sample Course 2",
        coursePrice : "200"
    }]
}

const instituteCourseSlice = createSlice({
    name : "institute-course-slice",
    initialState,
    reducers : {
        setStatus(state, action : PayloadAction<Status>) {
            state.status = action.payload;
        },
        setCourse(state, action : PayloadAction<any>) {
            state.courses = action.payload;
        },
        setDeleteCourse(state, action : PayloadAction<string>) {
            const index = state.courses.findIndex(course=> course.id =  action.payload)
            state.courses.splice(index,1)
    },
        setEditCourse(state, action : PayloadAction<any>) {
            const id = action.payload.id
            const data = action.payload.data
            const index = state.courses.findIndex(course => course.id === id)
            state.courses[1] = data
        }
    }
})

const {setStatus, setCourse, setDeleteCourse, setEditCourse} = instituteCourseSlice.actions
export default instituteCourseSlice.reducer

// thunks
export function createInstituteCourse(data : any) {
    return async function createInstitueCourseThunk(dispatch : AppDispatch) {
        try {
            const response = await API.post("/institue/course", data)
            if (response.status === 201) {
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

export function fetchInstituteCourse() {
    return async function fetchInstituteCourseThunk(dispatch : AppDispatch) {
        try {
            const response = await API.get("/institue/course")
            if (response.status === 201) {
                dispatch(setStatus(Status.SUCCESS))
                response.data.data.length > 0 && dispatch(setCourse(response.data.data))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function deleteInstituteCourse(id:string){
    return async function fetchInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await API.delete("/institute/course/" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                 dispatch(setDeleteCourse(id))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}


export function editInstituteCourse(id:string, data:any){
    return async function editInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await API.patch("/institute/course/" + id,data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setEditCourse({id,data}))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}