import axios from "../axios";

export interface SRTHistory {
  ID: string; // bson ObjectID     
  UserID: string; // bson ObjectID     
  FileName: string;
  S3URL: string;
  Duration: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
}

export const findHistories = async (): Promise<SRTHistory[]> => {
  return (await axios.get("/srt/histories")).data;
};

export const generateSRT = async (
  file: File,
  words_per_line: number,
  punctuation: boolean,
  consider_punctuation: boolean
): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("words_per_line", words_per_line.toString());
  formData.append("punctuation", punctuation.toString());
  formData.append("consider_punctuation", consider_punctuation.toString());

  const response = await axios.post("/srt", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};