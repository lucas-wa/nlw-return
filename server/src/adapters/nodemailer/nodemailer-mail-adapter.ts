import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9571721407a55a",
      pass: "be77b2b1b5ef67"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
            // Ferrameta mailtrap.io para ambiente de desenvolvimento
        await transport.sendMail({
            from:'Equipe Feedget <oi@feedget.com>',
            to: 'Lusca <lucaswanderley600@gmail.com>',
            subject,
            html: body,
        });

    }
}