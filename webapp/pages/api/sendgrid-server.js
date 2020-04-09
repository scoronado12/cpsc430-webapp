const sgMail = require('@sendgrid/mail')


export default async function(req, res) {
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    /*TODO populate a bunch of different addresses in-lieu of the the hard-coded email address*/
    const { subject, message } = req.body
    console.log(req.body);
    const content = {
        to: 'scoronad@mail.umw.edu',
        from: 'no_reply@umw.edu',
        subject: `${subject}`,
        text: `${message}`,
        html: `<p>${message}</p>`
    }
    try {
        await sgMail.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}
