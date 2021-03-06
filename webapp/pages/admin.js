import React, {useState, useEffect} from "react";
import Layout from '../components/MyLayout';
import Router from "next/router";
import Cookies from "js-cookie";
import Link from 'next/link';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import {Helmet} from 'react-helmet'

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
      email: '',
      password: ''
  })

  const [localUserId, setLocalUserId ] = useState('asdf');
  const [localUserName, setLocalUserName ] = useState('');
  /*const [localUserAccountData , setLocalUserAccountData] = useState({
      name: '',
      userid: ''
  })*/ 
  useEffect(() => {
    function handleUserIdChange(name){
      setLocalUserId(name);
    }
    function handleUserNameChange(name){
      setLocalUserName(name);
    }
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      console.log("handling response");
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        password: ''
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
    
    await axios.post("http://127.0.0.1:8000/admin_auth2", {
        email: inputs.email,
        password: inputs.password
        }).then((userAccountData) => {
            Cookies.set('Active_User', userAccountData.data.userid.toString() , {expires : 3});
            handleResponse(userAccountData.status, "Login Successful") /*Good request*/
            var cook = Cookies.get('Active_User');
            Router.replace("/search");
        //create session 
    }).catch((error) => {
        console.log("Login Failed");
        console.log(error.data);
        handleResponse(error.status , "Incorrect Username or Password"); /*bad request*/
        alert("Incorrect Username or Password - Please Try Again");

    }); /*unhandled response rejection warning error may occur*/
}
  var title = "UMW Enviromental Science Database - Login";
  return (
    <Layout>
    <main>
        <Helmet><title>{title}</title></Helmet>
        <div> 
            <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"/> 
        </div>
       		<Navbar bg="medium" expand="lg">
          	<Navbar.Brand href="/">EESAD</Navbar.Brand>
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
        	<div className="forms">
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="text"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                    />
                    <p></p>
                    <label htmlFor="password">Password</label>
                    <p></p>
                    <input
                        id="password"
                        type="password"
                        onChange={handleOnChange}
                        required
                        value={inputs.password}
                    />
                    <p></p>
                    <button id="submitButon" type="submit" disabled={status.submitting}>
                                  {!status.submitting
                                    ? !status.submitted
                                      ? 'Log In'
                                      : 'Logged In'
                                    : 'Logging In...'}
                    </button>


                </form>
			     </div>
        </div> 
    </main>
    <style type="text/css" jsx> {`

        #submitButon{
          background-color: #03254c; 
          color: white;
          border-radius: 12px;
          width: 100px;
        }
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
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          border: 2px solid #03254c;
          background-color: rgba(211, 211, 211, 0.5);
          text-align: center;
          font-size: 24px;
          
          padding-top: 20px;
          padding-right: 15px;
          padding-left: 15px;
          padding-bottom: 50px;
        } 
        Form-Control {
          width: 10%;
        }

        #formGridCheckbox {
          height: 50px;
          width: 50px;
        }
        .forms {
          width: 50%;       
        }
      `}</style>
    </Layout>
  );
}
