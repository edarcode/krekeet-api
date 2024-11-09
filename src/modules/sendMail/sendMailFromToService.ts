import { transporter } from "../../services/transporter";

export const sendMailFromToService = async (
  from: string,
  {
    msg,
    name = "No especificado",
    countryCode = "No especificado",
    num = "No especificado",
    serv = "No especificado",
  }: Params
) => {
  return await transporter.sendMail({
    from,
    to: process.env.NODEMAILER_GMAIL,
    subject: "Visitante de Krekeet 🐢",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">Krekeet 🐢</h2>
                
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; background-color: #f4f4f4;">Mensaje:</td>
            <td style="padding: 10px;">${msg || "Sin mensaje"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background-color: #f4f4f4;">Nombre:</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background-color: #f4f4f4;">Código de país:</td>
            <td style="padding: 10px;">${countryCode}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background-color: #f4f4f4;">Número:</td>
            <td style="padding: 10px;">${num}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background-color: #f4f4f4;">Servicio:</td>
            <td style="padding: 10px;">${serv}</td>
          </tr>
        </table>
        
        <p style="font-size: 14px; color: #555; margin-top: 20px;">Gracias por usar nuestro servicio.</p>
      </div>
    `,
  });
};

type Params = {
  msg: string;
  name?: string;
  countryCode?: string;
  num?: number | "No especificado";
  serv?: string;
};
