import { Status } from "@/lib/types/type";

export interface IUserData{
    username : string,
    password : string
}

export interface IIntialSate{
    user : IUserData,
    status : Status
}

export interface IRegisterData extends IUserData {
    email : string
}