import { Resend } from "resend";

export const sendMail = async (from?: string, msg?: string) => {
  console.log(from, msg);
  if (!from || !msg) return;

  const resend = new Resend(process.env.API_KEY_RESEND);

  const result = await resend.emails.send({
    from,
    to: [process.env.FROM_EMAIL_RESEND!],
    subject: "KREKEET",
    html: `<p>${msg}</p>`,
  });

  return result;
};
