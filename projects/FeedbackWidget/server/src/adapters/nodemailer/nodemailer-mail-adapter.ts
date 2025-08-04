import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f2710275078c73",
    pass: "aeb1db3a9d923d"
  }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) : Promise<void>{
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Marco Aurélio <marcoaurelio_7@outlook.com>',
            subject,
            html: body,
        });
    }
}