import Layout from '../components/MyLayout'
import Link from 'next/link'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

export default function About() {
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
        <h1 className="title"> About </h1>
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
        }
      `}
      </style>
    </Layout>
  );
}
