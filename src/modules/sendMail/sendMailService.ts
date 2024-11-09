import { SendMail } from "./sendMailDto";
import { sendMailFromToService } from "./sendMailFromToService";

export const sendMailService = async ({ from, ...data }: SendMail) => {
  return await sendMailFromToService(from, { ...data });
};
