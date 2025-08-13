import axios from "../axios";
import { AuthType, PlanType } from "@/types";

export interface User {
    ID: string;           // bson ObjectID
    Name: string;
    Email: string;
    PhoneNumber: string;
    Password?: string;
    AvatarURL?: string;
    Plan: PlanType;
    AuthType?: AuthType;
    LastLogin?: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt?: string;
}

export const getLoggedInUser = async () => {
    return axios.get<User>("/user/me");
};

export const CheckEmailExists = async (email: string) => {
    return axios.head(`/user/exists/email/${email}`);
};

export const CheckPhoneExists = async (phone: string) => {
    return axios.head(`/user/exists/phone/${phone}`);
};