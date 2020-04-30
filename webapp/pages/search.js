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
            results: []
        };
    }
  
    async getByEmail(email) {
        await axios.get(HOST + "/getUsersByEmails", {
            params: {
                field: email,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }

    async getByFirstName(fname) {
        await axios.get(HOST + "/first_name", {
            params: {
                field: fname,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }

    async getByLastName(lname) {
        await axios.get(HOST + "/last_name", {
            params: {
                field: lname,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }

    async getByMajor(major) {
        await axios.get(HOST + "/major", {
            params: {
                field: major,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }

    async getByYear(year) {
        await axios.get(HOST + "/graduation_year", {
            params: {
                field: year,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }

    async getByOccupation(occupation) {
        await axios.get(HOST + "/occupation", {
            params: {
                field: occupation,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }

    // Boolean true or false.
    async getByOptIn(yes) {
        await axios.get(HOST + "/newsletter", {
            params: {
                field: yes,
            },
        }).then((response) => {
            this.setState({results: response.data});
        });
    }
    /*TODO bolden selected radio button column*/
    displayResult() {
        this.resultData = this.state.results.map((object, key) => {
            return (
                <tr key={key}>
                    <td>{object.first_name}</td>
                    <td>{object.last_name}</td>
                    <td>{object.major}</td>
                    <td>{object.graduation_year}</td>
                    <td>{object.occupation}</td>
                    <td>{object.newletter_opt_in}</td>
                    <td>{object.email}</td>
                </tr>
            );
        });
    }

    handleOnSubmit(evt) {
        var input = document.getElementById("inputField").value;
        var group = document.getElementsByName("searchGroup");
        var checked = null;
        for (var radio of group) {
           if (radio.checked) {
                checked = radio.value;
           }
        }

        switch(checked) {
            case "email":
                this.getByEmail(input);
                this.displayResult();
                break;
            case "fname":
                this.getByFirstName(input);
                this.displayResult();
                break;
            case "lname":
                this.getByLastName(input);
                this.displayResult();
            case "major":
                this.getByMajor(input);
                this.displayResult();
                break;
            case "gradYear":
                this.getByYear(input);
                this.displayResult();
                break;
            case "occupation":
                this.getByOccupation(input);
                this.displayResult();
                break;
            default:
                break;
        }
    }

    render() {
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
                                <label htmlFor="inputField">Search:</label>
                                <input type="text" id="inputField" />
                            </div>
                            <div>
                                <label>Search Criteria</label>
                            </div>
                            <div role="group">
                                <input type="radio" id="firstNameRadio" name="searchGroup" value="fname" />
                                <label htmlFor="firstNameRadio">First Name</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="LastNameRadio" name="searchGroup" value="lname" />
                                <label htmlFor="lastNameRadio">Last Name</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="majorRadio" name="searchGroup" value="major" />
                                <label htmlFor="majorRadio">Major</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="gradYearRadio" name="searchGroup" value="gradYear"/>
                                <label htmlFor="gradYearRadio">Graduation Year</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="occupationRadio" name="searchGroup" value="occupation" />
                                <label htmlFor="occupationRadio">Occupation</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="emailRadio" name="searchGroup" value="email" />
                                <label htmlFor="emailRadio">E-mail</label>
                            </div>
                            <div>
                                <label htmlFor="newsletterSelect">Opted in newsLetter?</label>
                                <select id="newsletterSelect">
                                    <option checked>Both</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                                <Button onClick={this.handleOnSubmit.bind(this)}>Search</Button>
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
                                {this.resultData}
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
                        background-color: rgba(211, 211, 211, 0.8);
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
                        padding: 10px;
                    }
                `}
                </style>
        </Layout>);
    }
}

export default Search;
