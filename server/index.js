// create a varibale and which require the express
const express = require('express');

// create and app throught the express
const app =  express();

//create a simple get request
app.get("/", (request, response) => {
    response.send("hello World")
});

// this will listen to some node/port
app.listen(3001, () => {
    console.log('This is running on 3001');
});