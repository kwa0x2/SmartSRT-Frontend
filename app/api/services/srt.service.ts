import axios from "../axios";

export interface SRTHistory {
  ID: string;
  UserID: string;
  FileName: string;
  S3URL: string;
  Duration: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
}

export const findHistories = async (): Promise<SRTHistory[]> => {
  return (await axios.get("/srt/histories")).data;
  // return response.data;
};
