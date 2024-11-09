import { sendMail } from "../../services/sendMail";
import { SendMail } from "./sendMailDto";

export const sendMailService = async (params: SendMail) => {
  return await sendMail(params.from, params.msg);
};
