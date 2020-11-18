// Modules
const express = require('express');
const axios = require('axios');

// Create the app
const app = express();

// Create a PORT

const PORT = process.env.PORT || 3000;

// Create home route
app.get('/', (req, res) => {
    axios.get('https://api.github.com/users/tuhoalyhuynh')
    .then(response => {
        // console.log(response.data);
        const tuhoaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(tuhoaObject);

        res.send(tuhoaObject);
    });
});

// Create nitish route
app.get('/nitish', (req, res) => {
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        // console.log(response.data);
        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(nitishObject);

        res.send(nitishObject);
    });
});

// Create tuanh route
app.get('/tuanh', (req, res) => {
    axios.get('https://api.github.com/users/tuanhrex')
    .then(response => {
        // console.log(response.data);
        const tuanhObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(tuanhObject);

        res.send(tuanhObject);
    });
});

// Create edrees route
app.get('/edrees', (req, res) => {
    axios.get('https://api.github.com/users/edgerees')
    .then(response => {
        // console.log(response.data);
        const edreesObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(edreesObject);

        res.send(edreesObject);
    });
});

// Create angel route
app.get('/angel', (req, res) => {
    axios.get('https://api.github.com/users/ABarranco95')
    .then(response => {
        // console.log(response.data);
        const angelObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(angelObject);

        res.send(angelObject);
    });
});

// Create home route
app.get('/alex', (req, res) => {
    axios.get('https://api.github.com/users/AlexJBustillos')
    .then(response => {
        // console.log(response.data);
        const alexObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(alexObject);

        res.send(alexObject);
    });
});

// Listen on a PORT

app.listen(PORT, () => {
    console.log(`You're vibing to the sounds on PORT ${PORT}`);
});