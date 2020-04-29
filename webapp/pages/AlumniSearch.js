import await axios from 'await axios';

const HOST = "http://127.0.0.1:8000";

function getByEmail(email) {
    await axios.get(HOST + "/email", {
        params: {
            field: email,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByFirstName(fname) {
    await axios.get(HOST + "/first_name", {
        params: {
            field: fname,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByLastName(lname) {
    await axios.get(HOST + "/last_name", {
        params: {
            field: lname,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByMajor(major) {
    await axios.get(HOST + "/major", {
        params: {
            field: major,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByYear(year) {
    await axios.get(HOST + "/graduation_year", {
        params: {
            field: year,
        },
    }).then((response) => {
        return response.data;
    });
}

function getByOccupation(occupation) {
    await axios.get(HOST + "/occupation", {
        params: {
            field: occupation,
        },
    }).then((response) => {
        return response.data;
    });
}

// Boolean true or false.
function getByOptIn(yes) {
    await axios.get(HOST + "/newsletter", {
        params: {
            field: yes,
        },
    }).then((response) => {
        return response.data;
    });
}

handleOnSubmit(evt)( {
    switch(/*Radio button that selects search criteria*/) {
        case /*email*/:
            // TODO: Conditional that checks for valid values, execute the case if valid.
            result = async getByEmail(/*text field value*/);
            // TODO: process result as in display result in a table.
            break;
        case /*first name*/:
            // TODO: Conditional that checks for valid values, execute the case if valid.
            result = async getByFirstName(/*text field value*/);
            // TODO: process result as in display result in a table.
            break;
        case /*major*/:
            // TODO: Conditional that checks for valid values, execute the case if valid.
            result = async getByMajor(/*text field value*/);
            // TODO: process result as in display result in a table.
            break;
        case /*graduation year*/:
            // TODO: Conditional that checks for valid values, execute the case if valid.
            result = async getByYear(/*text field value*/);
            // TODO: process result as in display result in a table.
            break;
        case /*Occupation*/:
            // TODO: Conditional that checks for valid values, execute the case if valid.
            result = async getByOccupation(/*text field value*/);
            // TODO: process result as in display result in a table.
            break;
        case /*newsletter opt-in*/:
            // TODO: Conditional that checks for valid values, execute the case if valid.
            result = async getByOptIn(/*text field value*/);
            // TODO: process result as in display result in a table.
            break;
        default:
            break;
    }
}
