export interface SendMailData {

    subject: string,
    body: 

}

export interface MailAdapter {
    sendMail: (data: SendMailData) => Promise<void>
}