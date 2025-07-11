import { Status } from "@/lib/types/type"


export interface ITeacher {
    teacherName: string,
    teacherEmail: string,
    teacherPhoneNumber: string,
    teacherAddress: string
}

export interface IInitialTeacherData {
    teacher: ITeacher,
    status: Status
}