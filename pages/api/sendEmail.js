export default function sendEmail(req, res) {
    if (req.method == 'POST') {
        try {
            const { name, email, message } = JSON.parse(req.body)
            if (name && email && message) {
                const nodemailer = require('nodemailer')
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.PASSWORD,
                    },
                    secure: true,
                })
                const mailOptions = {
                    from: process.env.GMAIL_USER,
                    to: 'chaimaemichich@gmail.com',
                    subject: 'PORTFOLIO - new message',

                    html: `<p>Nom : ${name ?? ''}</p>   
                    <p>Email : ${email ?? ''}</p> <p> Message: ${
                        message ?? ''
                    }</p>`,
                }

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return res.status(200).json({
                            status: false,
                            error: error,
                            message: 'something went wrong while sending email',
                        })
                    } else {
                        return res.status(200).json({
                            status: true,
                            mailOptions,
                        })
                    }
                })
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'one of the fields is missing',
                })
            }
        } catch (error) {
            return res.status(200).json({
                status: false,
                message: 'something went wrong',
            })
        }
    } else {
        return res.status(200).json({
            status: 'false',
            message: 'method not supported',
        })
    }
}
