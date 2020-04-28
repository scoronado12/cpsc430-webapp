import React, {useState} from "react"
import Link from 'next/link'
import Layout from '../components/MyLayout'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';


export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    fname: '',
    lname: '',
    occupation: '',
    grad_yr: '',
    email: '',
    degree_obtained: '',
    bio: '',
    newsletter_optin: '1'
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        fname: '',
        lname: '',
        occupation: '',
        grad_yr: '',
        email: '',
        degree_obtained: '',
        bio: '',
        newsletter_optin: '1' /*TODO set to a default*/
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    
    await axios.post("http://127.0.0.1:8000/alumni_insert", {
        email: inputs.email,
        first_name: inputs.fname,
        last_name: inputs.lname,
        occupation: inputs.occupation,
        degree_obtained: inputs.degree_obtained,
        grad_year: inputs.grad_yr,
        bio: inputs.bio,
        newsletter_optin: '1'
    }).then((response) => {
        console.log("Good query");
        console.log(response.data);

        handleResponse(response.status, "Insert Sucessful") /*Good request*/

    }).catch((error) => {
        console.log("no good query");
        console.log(error.data);
        console.log("Error occured", error);
        handleResponse(error.status , "Error Occured"); /*bad request*/

    }); /*unhandled response rejection warning error may occur*/


      }


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
            <h2>Join Our Database!</h2>

        <form onSubmit={handleOnSubmit}>
            <label htmlFor="fname">Frist Name</label>
            <input
              id="fname"
              type="text"
              onChange={handleOnChange}
              required
              value={inputs.fname}
             />
            <p></p>
            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              onChange={handleOnChange}
              required
              value={inputs.lname}
            />
            <label htmlFor="Occupation">Occupation</label>
            <input
              id="occupation"
              onChange={handleOnChange}
              required
              value={inputs.occupation}
            />
            <p></p>

            <label htmlFor="grad_yr">Graduation Year</label>
            <input
              id="grad_yr"
              onChange={handleOnChange}
              required
              value={inputs.grad_yr}
            />
            <p></p>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <p></p>

           <label htmlFor="degree">Degree Obtained</label>
            <input
              id="degree_obtained"
              onChange={handleOnChange}
              required
              value={inputs.degree_obtained}
            />
            <p></p>

            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              onChange={handleOnChange}
              required
              value={inputs.bio}
            />
            <button type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
        </form>
          {status.info.error && (
            <div className="Error Occured - Please Try Again">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="Successfully Submitted">{status.info.msg}</div>
          )}

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
      )
}
