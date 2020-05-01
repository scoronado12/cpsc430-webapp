import Layout from '../components/MyLayout'
import Link from 'next/link'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import Router from 'next/router'

const title = "UMW Enviromental Science Database - Signup Form"

class Alumni extends Component {

  //export default function Alumni() {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      occupation: "",
      degree: "",
      grad_year: "",
      bio: ""
    }
    //this.handleUpdate = this.handleUpdate.bind(this);

  }

  handleOnSubmit = async e => {
    e.preventDefault()
    
    await axios.post("http://127.0.0.1:8000/alumni_insert", {
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        occupation: this.state.occupation,
        degree_obtained: this.state.degree,
        grad_year: this.state.grad_year,
        bio: this.state.bio,
        newsletter_optin: '1'
    }).then((response) => {
        console.log("Good query");
        console.log(response.data);
        alert("Sucessfully Recieved Your Information");
        Router.replace("/");
        //handleResponse(response.status, "Insert Sucessful") /*Good request*/

    }).catch((error) => {
        console.log("no good query");
        console.log(error.data);
        console.log("Error occured", error);
        //handleResponse(error.status , "Error Occured"); /*bad request*/

    });
  }

  handleUpdate(evt) {
    let change = {}
    change[evt.target.name] = evt.target.value

    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleClick(evt) {
    evt.preventDefault();
    console.log("clicked");
    console.log(this.state);
  }
  render() {
    return (
      <Layout>
        <main>
            <Helmet><title>{title}</title></Helmet>
          <div>
            <link rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossOrigin="anonymous" />
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
          <div id="earthIMG"><img src="/earth.png" style={{ maxWidth: "150px", maxHeight: "150px" }} /></div>
          <div id="UMWIMG"><img src="/umwEagle.png" style={{ maxWidth: "100px", maxHeight: "100px" }} /></div>
          <h1 className="title"> Enter Your Information Below! </h1>
          <div className="boxed" bg="medium">
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleUpdate.bind(this)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleUpdate.bind(this)}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUpdate.bind(this)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control type="text" placeholder="Occupation" name="occupation" value={this.state.occupation} onChange={this.handleUpdate.bind(this)}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Degree Obtained</Form.Label>
                  <Form.Control type="text" placeholder="Degree" name="degree" value={this.state.degree} onChange={this.handleUpdate.bind(this)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control type="number" min="1908" max="2050" placeholder="Year" name="grad_year" value={this.state.grad_year} onChange={this.handleUpdate.bind(this)}/>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bio </Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Bio" name="bio" value={this.state.bio} onChange={this.handleUpdate.bind(this)}/>
              </Form.Group>
              <Form.Group id="formGridCheckbox">
                <Form.Check className="czekbox" type="checkbox" label="Opt into department Newsletter" />
              </Form.Group>

              <Button variant="primary" onClick={this.handleOnSubmit.bind(this)}>
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
}

export default Alumni;
