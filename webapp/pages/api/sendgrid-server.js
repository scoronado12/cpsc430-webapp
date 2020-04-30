import axios from 'axios';

const sgMail = require('@sendgrid/mail');


export default async function(req, res) {
    var emails = [];
    var result; 
    /*Eriq - wired code here*/
    axios.get('http://localhost:8000/email')
        .then((response) => {

            result = response;
        }
        }).catch((error) =>{
            res.status(400).send('Server Error');
        });
    
    console.log("Request successful");
    console.log(result);


    emails.push("scoronad@mail.umw.edu");
    emails.push("eriqibar@gmail.com");
    
    


    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    /*TODO populate a bunch of different addresses in-lieu of the the hard-coded email address*/
    const { subject, message } = req.body
    console.log(req.body);
    for (var i = 0 ; i < emails.length; i++){
        console.log("Sending email to: " + emails[i]);
        var curr_email = emails[i].toString();
        const content = {
            to: curr_email, 
            from: 'no_reply@umw.edu',
            subject: `${subject}`,
            text: `${message}`,
            html: `<p>${message}</p>`
        }
        try {
            //await sgMail.send(content)
            if (i == emails.length - 1){
                console.log("Done!");
                res.status(200).send('Message sent successfully.')
            }
        } catch (error) {
            console.log('ERROR', error)
            res.status(400).send('Message not sent.')
        }

    }
}
