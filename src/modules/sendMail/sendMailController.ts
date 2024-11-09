import { Controller } from "../../types";
import { SendMail } from "./sendMailDto";
import { sendMailService } from "./sendMailService";

export const sendMailController: Controller = async (_req, res, next) => {
  try {
    const { from, msg } = res.locals.body as SendMail;
    const result = await sendMailService({ from, msg });
    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
