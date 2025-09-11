import axios from "../axios";
import { AuthType, PlanType } from "@/types";

export interface Usage {
    ID: string;
    UserID: string;
    UsageLimit: number;
    CreatedAt: string;
    UpdatedAt: string;
}

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

export interface UserWithUsage {
    user: User;
    usage_limit: Usage;
}

export const getLoggedInUser = async () => {
    return axios.get<UserWithUsage>("/user/me");
};

export const CheckEmailExists = async (email: string) => {
    return axios.head(`/user/exists/email/${email}`);
};

export const CheckPhoneExists = async (phone: string) => {
    return axios.head(`/user/exists/phone/${phone}`);
};