import { Status } from "@/lib/types/type"



interface IInstituteCourseInitialDataCourse{
    id : string,
    courseName : string,
    coursePrice : string
}

export interface IInstituteCourseInitialData {
    status : Status,
    courses : IInstituteCourseInitialDataCourse[]
}