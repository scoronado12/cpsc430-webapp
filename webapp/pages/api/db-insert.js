import axios from 'axios';
export default async function(req, res) {
    const { fname, lname, email, occupation, degree_obtained, grad_yr, bio, newsletter_optin } = req.body
    console.log(req.body);
    console.log("sending ----------");
    axios.post('http://127.0.0.1:8000/alumni_insert', {
        email: `${email}`,
        first_name: `${fname}`,
        last_name: `${lname}`,
        occupation: `${occupation}`,
        degree_obtained: `${degree_obtained}`,
        grad_year: `${grad_yr}`,
        bio: `${bio}`,
        newsletter_optin: "1"
    }).then(function(response) {
        console.log(response.data);
        res.status(200).send("Information Sent Sucessfully")
    }).catch(function (error){
        console.log("Error occured", error)
        res.status(400).send("Error sending data");

    }); /*unhandled response rejection warning error may occur*/


    /*TODO populate a bunch of different addresses in-lieu of the the hard-coded email address
    onst content = {
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
    }*/
}
