import Layout from '../components/MyLayout'
import Link from 'next/link'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';

const HOST = "http://127.0.0.1:8000";

class Search extends Component {
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
    }
  
    async getByEmail(email) {
        await axios.get(HOST + "/email", {
            params: {
                field: email,
            },
        }).then((response) => {
            return response.data;
        });
    }

    async getByFirstName(fname) {
        await axios.get(HOST + "/first_name", {
            params: {
                field: fname,
            },
        }).then((response) => {
            return response.data;
        });
    }

    async getByLastName(lname) {
        await axios.get(HOST + "/last_name", {
            params: {
                field: lname,
            },
        }).then((response) => {
            return response.data;
        });
    }

    async getByMajor(major) {
        await axios.get(HOST + "/major", {
            params: {
                field: major,
            },
        }).then((response) => {
            return response.data;
        });
    }

    async getByYear(year) {
        await axios.get(HOST + "/graduation_year", {
            params: {
                field: year,
            },
        }).then((response) => {
            return response.data;
        });
    }

    async getByOccupation(occupation) {
        await axios.get(HOST + "/occupation", {
            params: {
                field: occupation,
            },
        }).then((response) => {
            return response.data;
        });
    }

    // Boolean true or false.
    async getByOptIn(yes) {
        await axios.get(HOST + "/newsletter", {
            params: {
                field: yes,
            },
        }).then((response) => {
            return response.data;
        });
    }

    handleOnSubmit(evt) {
        //switch(/*Radio button that selects search criteria*/) {
            //case /*email*/:
                // TODO: Conditional that checks for valid values, execute the case if valid.
                //result = async getByEmail(/*text field value*/);
                // TODO: process result as in display result in a table.
                //break;
            //case /*first name*/:
                // TODO: Conditional that checks for valid values, execute the case if valid.
                //result = async getByFirstName(/*text field value*/);
                // TODO: process result as in display result in a table.
                //break;
            //case /*major*/:
                // TODO: Conditional that checks for valid values, execute the case if valid.
                //result = async getByMajor(/*text field value*/);
                // TODO: process result as in display result in a table.
                //break;
            //case /*graduation year*/:
                // TODO: Conditional that checks for valid values, execute the case if valid.
                //result = async getByYear(/*text field value*/);
                // TODO: process result as in display result in a table.
                //break;
            //case /*Occupation*/:
                // TODO: Conditional that checks for valid values, execute the case if valid.
                //result = async getByOccupation(/*text field value*/);
                // TODO: process result as in display result in a table.
                //break;
            //case /*newsletter opt-in*/:
                // TODO: Conditional that checks for valid values, execute the case if valid.
                //result = async getByOptIn(/*text field value*/);
                // TODO: process result as in display result in a table.
                //break;
            //default:
                //break;
        //}
    }

    render() {
        var result
        return (
            <Layout>
                <main>
                    <div>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
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
                    <div id="earthIMG">
                        <img src="/earth.png" style={{ maxWidth: "150px", maxHeight: "150px" }} />
                    </div>
                    <div id="UMWIMG">
                        <img src="/umwEagle.png" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                    </div>
                    <div className="boxed" bg="medium">
                        <form className="search-form">
                            <div>
                                <label for="inputField">Search:</label>
                                <input type="text" id="inputField" />
                            </div>
                            <div>
                                <label>Search Criteria</label>
                            </div>
                            <div>
                                <input type="radio" id="firstNameRadio" />
                                <label for="firstNameRadio">First Name</label>
                                <input type="radio" id="LastNameRadio" />
                                <label for="lastNameRadio">Last Name</label>
                                <input type="radio" id="majorRadio" />
                                <label for="majorRadio">Major</label>
                                <input type="radio" id="gradYearRadio" />
                                <label for="gradYearRadio">Graduation Year</label>
                                <input type="radio" id="occupationRadio" />
                                <label for="occupationRadio">Occupation</label>
                                <input type="radio" id="emailRadio" />
                                <label for="emailRadio">E-mail</label>
                            </div>
                            <div>
                                <label for="newsletterSelect">Opted in newsLetter?</label>
                                <select id="newsletterSelect">
                                    <option checked>Both</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Major</th>
                                    <th>Graduation Year</th>
                                    <th>Occupation</th>
                                    <th>Newsletter opt-in</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
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
                    .table {
                        font-size: 18px;
                    }
                    .search-form {
                        font-size: 15px;
                    }
                `}
                </style>
        </Layout>);
    }
}

export default Search;
