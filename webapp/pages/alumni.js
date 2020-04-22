import axios from 'axios';
import Layout from '../components/MyLayout'
import Link from 'next/link'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'


function submission() {
    axios.post('http://127.0.0.1:8000/alumni_insert', {
        params: {
            first_name: "Tester",
            last_name: "McTesterson",
            email: "hardcode@stefanocoronado.com",
            occupation: "student",
            degree_obtained: "Computer Science",
            grad_year: "2020",
            bio: "Hello world from the hardcoded api call",
            newsletter_optin: "1"
        },
    }).then((response) => {
        console.log(response.data);
    });
}





export default function Alumni() {
  return (
    <Layout>
    <main>
        <div> 
            <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"/> 
            {submission()}
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
        <h1 className="title"> Enter Your Information Below! </h1>
        <div className="boxed" bg="medium">
         	<Form>
  				<Form.Row>
    				<Form.Group as={Col} controlId="formGridEmail">
      				<Form.Label>First Name</Form.Label>
      				<Form.Control type="text" placeholder="First Name" />
    				</Form.Group>

    				<Form.Group as={Col} controlId="formGridPassword">
      				<Form.Label>Last Name</Form.Label>
      				<Form.Control type="text" placeholder="Last Name" />
    				</Form.Group>
  				</Form.Row>
  				<Form.Row>
    				<Form.Group as={Col} controlId="formGridEmail">
      				<Form.Label>Email</Form.Label>
      				<Form.Control type="email" placeholder="Email" />
    				</Form.Group>

    				<Form.Group as={Col} controlId="formGridPassword">
      				<Form.Label>Occupation</Form.Label>
      				<Form.Control type="text" placeholder="Occupation" />
    				</Form.Group>
  				</Form.Row>
  				<Form.Row>
    				<Form.Group as={Col} controlId="formGridEmail">
      				<Form.Label>Degree Obtained</Form.Label>
      				<Form.Control type="text" placeholder="Degree" />
    				</Form.Group>

    				<Form.Group as={Col} controlId="formGridPassword">
      				<Form.Label>Graduation Year</Form.Label>
      				<Form.Control type="text" placeholder="Year" />
    				</Form.Group>
  				</Form.Row>
  				<Form.Group controlId="exampleForm.ControlTextarea1">
    				<Form.Label>Bio </Form.Label>
    				<Form.Control as="textarea" rows="3" placeholder="Bio" />
  				</Form.Group>
  				<Form.Group id="formGridCheckbox">
    				<Form.Check className="czekbox" type="checkbox" label="Opt into department Newsletter" />
  				</Form.Group>

  				<Button variant="primary" type="submit">
    				Submit
  				</Button>
  				</Form>
        </div> 
    </main>
    <style type="text/css" jsx> {`

        .title {
          text-align: center;
          color: #03254c;
          font-size: 62px;
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
        }
        .boxed {
          border: 2px solid #03254c;
          background-color: rgba(211, 211, 211, 0.5);
          text-align: center;
          font-size: 32px;
          margin-left: 12px;
          margin-right: 12px;
          padding-top: 15px;
          padding-right: 15px;
          padding-left: 15px;
          padding-bottom: 15px;
        } 
        .form-control {
        	width: 50%;
        }
        #formGridCheckbox {
        	height: 50px;
        	width: 50px;
        }
      `}
      </style>
    </Layout>
  );
}
