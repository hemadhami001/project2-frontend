import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
    name : "teacherSlice",
    initialState : {
        teacherName : "",
        teacherPassword : ""
    },
    reducers : {
        setTeacherName(state, action){
            state.teacherName = "haha"
        },
        setTeacherPassword(state, action){
            state.teacherPassword = "hehe"
        }
   }
})



// createSlice le chai hami lai reducer function haru provide garcha
// action haru ko lagi chai action creator function haru provide garcha
// action haru automatically generate huncha

const { setTeacherName, setTeacherPassword } = teacherSlice.actions
export default teacherSlice.reducer
export { setTeacherName, setTeacherPassword }


// reducer ko name j hunchha, action ko name pani same tai huncha
// export const { setTeacherName, setTeacherPassword } = teacherSlice.actions;

/*
FLOW:
1. createSlice le chai reducer function haru banaucha
2. reducer function haru lai action creator function haru banaucha
3. action creator function haru lai export garna parcha
4. action creator function haru lai dispatch garna parcha
5. dispatch garepachi reducer function call huncha
6. reducer function le state lai update garcha
7. state update bhayepachi, component haru re-render huncha
8. re-render bhayepachi, component haru ma naya state ko value aaucha
9. yo process chai react ma state management ko lagi use huncha

reducers --> communicate with components --> action lai call garna parcha --> feri action creator function lai dispatch garna parcha



*/