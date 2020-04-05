import React from "react";
import Link from 'next/link'
import Layout from '../components/MyLayout'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'


//const sgMail = require('@sendgrid/mail');
class Email extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            subject: "",
            message: ""
        };

    }

    handleUpdateSubjectLine(evt){
        this.setState({ subject: evt.target.value});
    }

    handleUpdateMessageBox(evt){

        this.setState({ message: evt.target.value});
    }


    async handle_email(evt){

        var subject = this.state.subject;
        var message = this.state.message;
        //      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        console.log("subject txt: " + subject);
        console.log("msg txt: " + message);
        /*const msg = {
           to: 'scoronad@mail.umw.edu',
           from: 'no_reply@umw.edu',
           subject: subject,
           text: message,
        };
        */
        //sgmail.send(msg);
        console.log("Message Allegedly Sent!");

    }



    render() {

          return (
         <Layout>
          <main>
            <div> 
                <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"/> 
            </div>
        
            
            <Navbar bg="medium" expand="lg">
              <Navbar.Brand href="#home">EESAD</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>  
              </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div id="earthIMG"><img src="/earth.png" style={{maxWidth:"150px", maxHeight:"150px"}}/></div>
            <div id="UMWIMG"><img src="/umwEagle.png" style={{maxWidth:"100px", maxHeight:"100px"}}/></div>
            <h1 className="title">UMW</h1>
            <h1 className="titletwo"> Earth Science Alumni Database </h1>
            <div className="floating-box">
                <h2>Send an email to all registered users</h2>
                <Form>
                    <Form.Group controlId="subject_line" > 
                            <Form.Label>Subject Line </Form.Label>
                            <Form.Control as="textarea" rows="1" placeholder="Subject" size="sm" value={this.state.subject} onChange={this.handleUpdateSubjectLine.bind(this)} />
                    </Form.Group>


                    <Form.Group controlId="message_box"> 
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Message" value={this.state.message} onChange={this.handleUpdateMessageBox.bind(this)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handle_email.bind(this)}>Send</Button>
                </Form>


            </div>
            </main>
            
        
        
       
        
          <style type="text/css" jsx> {`

             .title {
              text-align: center;
              color: #03254c;
              font-size: 40px;
              font-weight: bold;
            }
            .titletwo {
              text-align: center;
              font-size: 40px;
              color: #03254c;
              font-weight: bold;
            }
            main {
              position: fixed;
              width: 100%;
              height: 100%;
              background-size: cover;
              background-image: url("jepson.jpg");
              font-family: "Times New Roman";
              overflow: auto;

            }
            .button {
              background-color: #03254c;
              color: white;
              padding: 14px 40px;
              border-radius: 8px;
            }
            #earthIMG {
              position: absolute;
              top: 10px;
              right: 100px;
            }
            #UMWIMG {
              position: absolute;
              top: 10px;
              right 12.5px;
            }
            Navbar {
              background-color: grey;
              color: #03254c;
              font-weight: bold;
            }
            .floating-box {
             position: centered;
             margin-left: 12px;
              margin-right: 12px;
              padding-top: 15px;
              padding-right:15px;
              padding-left: 15px;
              padding-bottom: 15px;
              border: 5px solid #03254c; 
              background-color: #CDCDCD; 
              border-radius: 8px;

            }
            .buttons {
             
            }
            .enterButton {
              opacity: 10;
              text-align: center;
              background-color: #03254c;
              color: white;
              width: 15%;
              position: fixed;
              padding: 14px 40px;
              border-radius: 8px;
              font-size: 24px;
              justify-content: center;
              top: 38%;
              left: 42.5%;
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              flex: 1 1 0%;
              transition-duration: 0.4s;
            }
            .adminButton {
              width: 15%;
              opacity: 10;
              text-align: center;
              background-color: #03254c;
              color: white;
              position: fixed;
              padding: 14px 40px;
              border-radius: 8px;
              font-size: 24px;
              top: 50%;
              left: 42.5%;
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              transition-duration: 0.4s;
              flex: 1 1 0%;
            }
            .adminButton:hover {
              background-color: #B53737;
              color: white;
            }
            .enterButton:hover {
              background-color: #B53737;
              color: white;
            }
        `}
          </style>
        </Layout>
          );
    }
}

export default Email;
