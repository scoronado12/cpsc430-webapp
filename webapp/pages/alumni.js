import axios from 'axios';
import Layout from '../components/MyLayout'
import Link from 'next/link'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

class Alumni extends React.Component {
    
    constructor(props){
        
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email_addr: "",
            occupation: "",
            degree: "",
            grad_yr: "",
            bio: "",
            newsletter_optin: ""
        };
    }
    
    handleUpdatefname(evt){
        this.setState({fname: evt.target.value});
    }
    
    
    handleUpdatelname(evt){
            this.setState({ lname: evt.target.value});
    }
    
        
    handleUpdateemail(evt){
            this.setState({ email_addr: evt.target.value});
    }
           
    handleUpdateOccupation(evt){
            this.setState({ occupation: evt.target.value});
    }
    handleUpdateGradyear(evt){
            this.setState({ grad_yr: evt.target.value});
    }
    
    handleUpdateDegree(evt){
            this.setState({degree: evt.target.value})
    }
    
    handleUpdateBio(evt){
        this.setState({bio: evt.target.value});
    }
    
    handle_newsletter_optin(evt){
        this.setState({newsletter_optin: evt.target.value});
    }

    handle_submission(evt) {
        evt.preventDefault();
        
        console.log("Name: " + this.state.fname);
        console.log("Lname: " + this.state.lname);
        console.log("email: " + this.state.email);
        console.log("grad_yr: " + this.state.grad_yr);
        console.log("bio: " + this.state.bio);
        console.log("newsletter? " + this.state.newsleter_optin); 
        /*
        axios.post('http://127.0.0.1:8000/alumni_insert', {
            
            first_name: "Tester",
            last_name: "McTesterson",
            email: "hardcode@stefanocoronado.com",
            occupation: "student",
            degree_obtained: "Computer Science",
            grad_year: "2020",
            bio: "Hello world from the hardcoded api call",
            newsletter_optin: "1",
            
        }).then((response) => {
            console.log(response.data);
        }); /*unhandled response rejection warning error may occur*/ 
    }





    render() {
    return (
        <Layout>
        <main>
            <div> 
                <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"/> 
                
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
                <form onSubmit={this.handle_submission}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="first_name_line">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" value={this.state.fname} onChange={this.handleUpdatefname.bind(this)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="last_name_line">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={this.state.lname} onChange={this.handleUpdatelname.bind(this)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email_line">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={this.state.email_addr} onChange={this.handleUpdateemail.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="occupation_line">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control type="text" placeholder="Occupation" onChange={this.handleUpdateOccupation.bind(this)} value={this.state.occupation} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="degree_line">
                        <Form.Label>Degree Obtained</Form.Label>
                        <Form.Control type="text" placeholder="Degree" value={this.state.degree} onChange={this.handleUpdateDegree.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="year_line">
                        <Form.Label>Graduation Year</Form.Label>
                        <Form.Control type="text" placeholder="Year" value={this.state.grad_yr} onChange={this.handleUpdateGradyear.bind(this)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="bio_line">
                        <Form.Label>Bio </Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Bio" value={this.state.bio} onChange={this.handleUpdateBio.bind(this)}/>
                    </Form.Group>
                    <Form.Group id="checkbox">
                        <Form.Check className="czekbox" type="checkbox" label="Opt into department Newsletter" value={this.state.newsleter_optin} onChange={this.handle_newsletter_optin.bind(this)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit </Button>
                    </form>
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
}

export default Alumni;
