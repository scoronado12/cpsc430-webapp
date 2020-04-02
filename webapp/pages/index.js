
import Link from 'next/link'
import Layout from '../components/MyLayout'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
const linkStyle = {
  
};
export default function Index() {
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
        <h1 className="title">UMW</h1>
        <h1 className="titletwo"> Earth Science Alumni Database </h1>
        <div className="floating-box"></div>
        <form>
          <button className="enterButton" type="submit" formaction="/alumni">Enter Your Info!</button>
        </form>
        <form>
          <button className="adminButton" type="submit" formaction="/admin">Admin Login</button>
        </form>
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
        .floating-box {
          top: 25%;
          left: 36%;
          position: fixed;
          width: 500px;
          height: 400px;
          margin: 10px;
          border: 5px solid #03254c; 
          background-color: #CDCDCD; 
          opacity: 0.75;
          border-radius: 8px;
        }
        .enterButton {
          opacity: 10;
          text-align: center;
          background-color: #03254c;
          color: white;
          position: fixed;
          padding: 14px 40px;
          border-radius: 8px;
          font-size: 24px;
          top: 38%;
          left: 43%;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        }
        .adminButton {
          opacity: 10;
          text-align: center;
          background-color: #03254c;
          color: white;
          position: fixed;
          padding: 14px 40px;
          border-radius: 8px;
          font-size: 24px;
          top: 50%;
          left: 43.75%;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
          transition-duration: 0.4s;
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