import { z } from "zod";

export const sendMailDto = z.object({
  msg: z.string().min(1),
  from: z.string().email(),
});

export type SendMail = z.infer<typeof sendMailDto>;
