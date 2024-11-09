import { Controller } from "../../types";
import { SendMail } from "./sendMailDto";
import { sendMailService } from "./sendMailService";

export const sendMailController: Controller = async (_req, res, next) => {
  try {
    const data = res.locals.body as SendMail;
    await sendMailService({ ...data });

    res.status(200).json({ msg: "Msg enviado correctamente." });
  } catch (error) {
    next(error);
  }
};
