import axios from "../axios"

export interface Usage {
    ID: string;    // bson ObjectID        
    UserID: string;       // bson ObjectID      
    StartDate: string;     // Subscription start date, renews every 30 days
    MonthlyUsage: number;  // Usage duration for current period (minutes)
    TotalUsage: number;    // Total usage duration since registration (minutes)
    CreatedAt: string;    
    UpdatedAt: string;     
}

export const getUsage = async () => {
    return await axios.get<Usage>("/usage")
}