const express = require('express');
const server = express();

const dbOptions = {
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: ''
};

/**
 *
 * @param success {boolean}
 * @param object {object} the Express response Object
 * @param data {object} any data that should be send back to request maker
 * @param database
 * @param headers {object} Headers Object
 * @param cookies {object} any possible cookies needed
 */
const sendResponse = (success, object, data, database = null, headers = {}, cookies = {}) => {
    {
        const keys = Object.keys(headers);
        for (let i = 0; i !== keys.length; i++) {
            object.set(keys[i], headers[keys[i]]);
        }
    }
    {
        const keys = Object.keys(cookies);
        for (let i = 0; i !== keys.length; i++) {
            object.cookie(keys[i], cookies[keys[i]]);
        }
    }
    if(database != null) database.end();

    const responseObject = {success: success, data: data};
    object.json(responseObject);
};

/**
 * Creates listeners
 * @param options {object} can contain anything necessary as other references
 */
const createApiListeners = (options) => {

    server.get('/', (request, response) => {

        options.mysql.start(dbOptions, (success, data) => {
            if(success) {
                sendResponse(true, response, {message: "Connected to database"}, data.connection);

            } else {
                sendResponse(false, response, {message: "Connection to database failed!", error: data});
            }
        });
    });



};
/**
 *
 * @param ports {array}
 * @param options {object}
 * @param callback {function}
 */
const startServer = (ports, options, callback) => {
    createApiListeners(options);

    ports.forEach((port) => {
        server.listen(port, () => {
            callback(true, port)
        });
    })
};
exports.start = startServer;