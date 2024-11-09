import { z } from "zod";

export const sendMailDto = z
  .object({
    msg: z.string().min(1),
    from: z.string().email(),
    name: z.string().optional(),
    countryCode: z.string().optional(),
    num: z.coerce.number().optional(),
    serv: z.string().optional(),
  })
  .strict();

export type SendMail = z.infer<typeof sendMailDto>;
