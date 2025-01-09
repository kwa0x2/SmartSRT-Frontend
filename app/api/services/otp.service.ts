import axios from "../axios";

export const sendOtp = async (data: { phone_number: string }) => {
  return await axios.post("/auth/otp/send", data);
};
