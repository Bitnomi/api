console.log("Init message");

//Listener for exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error:\n${err}`)
    //TODO error processing and evaluation
});

//Imports
const server = require("./src/Server");
const mysql = require("./src/database/Database");

server.start([3000], {mysql: mysql}, (success, port) => {
    console.log("Server started on: " + port)
});