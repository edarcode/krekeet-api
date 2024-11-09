import { Router } from "express";
import { sendMailController } from "./sendMailController";
import { verifyDto } from "../../middlewares/verifyDto";
import { sendMailDto } from "./sendMailDto";

export const sendMailRoute = Router();

sendMailRoute.post("", verifyDto({ body: sendMailDto }), sendMailController);
