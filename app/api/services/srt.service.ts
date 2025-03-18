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

export interface LambdaBodyResponse {
  message: string;
  srt_url: string;
  duration: number;
}

export interface GenerateSRTResponse {
  status_code: number;
  body: LambdaBodyResponse;
}

export const findHistories = async (): Promise<SRTHistory[]> => {
  return (await axios.get("/srt/histories")).data;
};

export const generateSRT = async (
  file: File,
  words_per_line: number,
  punctuation: boolean,
  consider_punctuation: boolean
): Promise<GenerateSRTResponse> => {
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