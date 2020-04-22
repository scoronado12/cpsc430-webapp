import axios from 'axios';

const HOST = "http://127.0.0.1:8000";

function getByEmail(email) {
    axios.get(HOST + "/email", {
        params: {
            field: email,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByFirstName(fname) {
    axios.get(HOST + "/first_name", {
        params: {
            field: fname,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByLastName(lname) {
    axios.get(HOST + "/last_name", {
        params: {
            field: lname,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByMajor(major) {
    axios.get(HOST + "/major", {
        params: {
            field: major,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByYear(year) {
    axios.get(HOST + "/graduation_year", {
        params: {
            field: year,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByOccupation(occupation) {
    axios.get(HOST + "/occupation", {
        params: {
            field: occupation,
        },
    }).then((response) => {
        return response.data;
    });
}

// Boolean true or false.
function getByOptIn(yes) {
    axios.get(HOST + "/newsletter", {
        params: {
            field: yes,
        },
    }).then((response) => {
        return response.data;
    });
}
